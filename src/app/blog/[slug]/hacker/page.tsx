import type { Database } from "@/models/db.supabase";
import { Post } from "@/models/posts";
import { FormattedText } from "@/ui/atoms";
import { BlogPostHeader } from "@/ui/molecules";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function BlogEntryPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase
    .from("posts")
    .select("*, user:users(id, name, username)")
    .eq("slug", slug);

  const post = data![0] as Post;

  return (
    <article className="grid gap-12">
      <BlogPostHeader post={post} mode="dev" />
      <FormattedText>{JSON.stringify(post, null, 2)}</FormattedText>
    </article>
  );
}
