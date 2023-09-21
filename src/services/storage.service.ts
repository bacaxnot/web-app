import { Database } from "@/models/db.supabase";
import { ErrorOrData } from "@/types";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export const CDN_BASE_URL = process.env.CDN_BASE_URL!;

export async function saveAudio({
  client,
  fileName,
  audio,
}: {
  client: SupabaseClient<Database>;
  fileName: string;
  audio: ArrayBuffer;
}): Promise<ErrorOrData<{ url: string }>> {
  let result: ErrorOrData<{ url: string }> = {
    error: { message: "" },
    data: null,
  };

  const { data: storageData, error: storageError } = await client.storage
    .from("audio")
    .upload(fileName, audio, {
      contentType: "audio/mpeg",
    });

  if (storageError) {
    result.error = { message: storageError.message };
    return result;
  }

  result = {
    error: null,
    data: { url: `${CDN_BASE_URL}/audio/${storageData.path}` },
  };

  return result;
}

export async function saveImage({
  client,
  fileName,
  image,
}: {
  client: SupabaseClient<Database>;
  fileName: string;
  image: Buffer;
}) {
  let result: ErrorOrData<{ url: string }> = {
    error: { message: "" },
    data: null,
  };

  const { data: storageData, error: storageError } = await client.storage
    .from("images")
    .upload(fileName, image, {
      contentType: "image/png",
    });

  if (storageError) {
    result.error = { message: storageError.message };
    return result;
  }

  result = {
    error: null,
    data: { url: `${CDN_BASE_URL}/images/${storageData.path}` },
  };

  return result;
}
