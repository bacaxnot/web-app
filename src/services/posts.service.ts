import { Post } from "@/models/api.posts";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { textToSpeech } from "./elevenlabs.service";
import { ErrorOrData } from "@/types";
import { saveAudioPost } from "./audio-posts.service";
import { Database } from "@/models/db.supabase";

export async function createPost({
  client,
  post,
}: {
  client: SupabaseClient<Database>;
  post: Post;
}): Promise<ErrorOrData<Required<Post>>> {
  let result: ErrorOrData<Required<Post>> = {
    error: { message: "" },
    data: null,
  };

  const { data: audio, error: audioError } = await textToSpeech({
    text: post.content,
  });
  if (audioError) {
    result.error = { message: audioError.message };
    return result;
  }

  const { data: storageData, error: storageError } = await saveAudioPost({
    client,
    fileName: `${post.slug}.mp3`,
    audio,
  });
  if (storageError) {
    result.error = { message: storageError.message };
    return result;
  }

  const { data: userData, error: userError } = await client.auth.getUser();
  if (userError) {
    result.error = { message: userError.message };
    return result;
  }

  const postData = {
    ...post,
    audio_url: storageData.url,
    user_id: userData.user.id,
  };

  const { error: postError } = await client.from("posts").insert(postData);
  if (postError) {
    result.error = { message: postError.message };
    return result;
  }

  result = { data: postData, error: null };
  return result;
}
