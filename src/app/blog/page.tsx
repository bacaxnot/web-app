import type { Database } from "@/models/db.supabase";
import { Disclaimer } from "@/ui/atoms";
import { BlogPostCard } from "@/ui/organisms";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function BlogHomePage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(*)");

  return (
    <section className="z-0 grid gap-6 @container">
      <Disclaimer>
        este blog solo pretende compartir ideas que tengo mientras exploro este
        maravilloso misterio llamado existencia. si te gusta, genial; si no,
        también. besos cibernéticos para tod@s.
      </Disclaimer>
      <ul className="grid gap-x-8 gap-y-16 @2xl:grid-cols-2">
        {posts?.map((post, index) =>
          index === 0 ? (
            <BlogPostCard
              key={post.id}
              post={post}
              className="@2xl:col-span-2"
            />
          ) : (
            <BlogPostCard key={post.id} post={post} />
          ),
        )}
      </ul>
    </section>
  );
}

export async function generateStaticParams() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(*)");
  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
