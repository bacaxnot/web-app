"use server";

import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { createPost } from "@/services/posts.service";

export async function createPostAction(data: FormData) {
  const supabase = createServerActionClient({ cookies });
  const postInfo = extractPostInfoFromForm(data);

  const { data: createData, error: createError } = await createPost({
    client: supabase,
    payload: postInfo,
  });
  return { data: createData, error: createError };
}

function extractPostInfoFromForm(data: FormData) {
  const title = data.get("post-title") as string;
  const content = data.get("post-content") as string;
  return { title, content };
}
