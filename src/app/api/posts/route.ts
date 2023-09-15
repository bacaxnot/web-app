import { createPost } from "@/services/posts.service";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });

  const formData = await req.formData();
  const postInfo = extractPostInfoFromForm(formData);

  const { data, error } = await createPost({
    client: supabase,
    post: postInfo,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}

function extractPostInfoFromForm(data: FormData) {
  const slug = data.get("post-slug") as string;
  const title = data.get("post-title") as string;
  const content = data.get("post-content") as string;
  return { slug, title, content };
}
