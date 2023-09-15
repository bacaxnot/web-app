import { ErrorOrData } from "@/types";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

const CDN_BASE_URL =
  "https://ehgwwzsrzlymozphrlyk.supabase.co/storage/v1/object/public/audio_posts/";

export async function saveAudioPost({
  client,
  fileName,
  audio,
}: {
  client: SupabaseClient;
  fileName: string;
  audio: ArrayBuffer;
}): Promise<ErrorOrData<{ url: string }>> {
  let result: ErrorOrData<{ url: string }> = {
    error: { message: "" },
    data: null,
  };

  const { data: storageData, error: storageError } = await client.storage
    .from("audio_posts")
    .upload(fileName, audio, {
      contentType: "audio/mpeg",
    });

  if (storageError) {
    result.error = { message: storageError.message };
    return result;
  }

  result = {
    error: null,
    data: { url: `${CDN_BASE_URL}${storageData.path}` },
  };

  return result;
}
