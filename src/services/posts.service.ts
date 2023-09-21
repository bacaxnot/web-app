import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { textToSpeech } from "./elevenlabs.service";
import { ErrorOrData } from "@/types";
import { saveAudio, saveImage } from "./storage.service";
import { Database } from "@/models/db.supabase";
import {
  Post,
  PostCreationFields,
  PostCreationReqFields,
} from "@/models/posts";
import { generateImageFromText } from "./dall-e.service";
import { sluggify } from "@/lib/utils";

export async function getPostBySlug({
  client,
  slug,
}: {
  client: SupabaseClient<Database>;
  slug: string;
}): Promise<ErrorOrData<Post>> {
  let result: ErrorOrData<Post> = {
    error: { message: "" },
    data: null,
  };

  const { data: post, error: postError } = await client
    .from("posts")
    .select("*, user:users(*), role:roles(name)")
    .eq("slug", slug)
    .single();

  if (postError) {
    result = { error: { message: postError.message }, data: null };
    return result;
  }
  return (result = { data: post, error: null });
}

export async function checkPostAvailability({
  client,
  slug,
}: {
  client: SupabaseClient<Database>;
  slug: string;
}) {
  let result: ErrorOrData<Omit<Post, "user">> = {
    error: { message: "" },
    data: null,
  };

  const { data: postExists, error: postExistsError } = await client
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (postExistsError) {
    result.error = { message: postExistsError.message };
    return result;
  }
  result = { data: postExists, error: null };
  return result;
}

export async function createPost({
  client,
  payload,
}: {
  client: SupabaseClient<Database>;
  payload: PostCreationFields;
}): Promise<ErrorOrData<PostCreationReqFields>> {
  let result: ErrorOrData<PostCreationReqFields> = {
    error: { message: "" },
    data: null,
  };

  console.log("creating post slug...\n");
  const slug = sluggify(payload.title);
  const post = { ...payload, slug };

  console.log("checking if post exists...");
  const { data: postExists } = await checkPostAvailability({
    client,
    slug,
  });
  if (postExists) {
    result.error = { message: "post with that slug or title already exists" };
    return result;
  }

  console.log("generating audio...\n");
  const { data: audio, error: audioError } = await textToSpeech({
    text: post.content,
  });
  if (audioError) {
    result.error = { message: audioError.message };
    return result;
  }

  console.log("saving audio...\n");
  const { data: audioStorageData, error: audioStorageError } = await saveAudio({
    client,
    fileName: `posts/${post.slug}.mp3`,
    audio,
  });
  if (audioStorageError) {
    result.error = { message: audioStorageError.message };
    return result;
  }

  console.log("generating image...\n");
  const { data: imageGen, error: imageGenError } = await generateImageFromText({
    content: post.content,
  });
  if (imageGenError) {
    result.error = { message: imageGenError.message };
    return result;
  }

  console.log("saving image...\n");
  const { data: imageStorageData, error: imageStorageError } = await saveImage({
    client,
    fileName: `posts/${post.slug}.png`,
    image: imageGen.buffer,
  });
  if (imageStorageError) {
    result.error = { message: imageStorageError.message };
    return result;
  }

  console.log("getting user...\n");
  const { data: userData, error: userError } = await client.auth.getUser();
  if (userError) {
    result.error = { message: userError.message };
    return result;
  }

  const postData = {
    ...post,
    audio_url: audioStorageData.url,
    image_url: imageStorageData.url,
    user_id: userData.user.id,
  };

  console.log("inserting post...\n");
  const { error: postError } = await client.from("posts").insert(postData);
  if (postError) {
    result.error = { message: postError.message };
    return result;
  }

  result = { data: postData, error: null };
  console.log("done", result);
  return result;
}
