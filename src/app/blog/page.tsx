import type { Database } from "@/models/db.supabase";
import { Disclaimer } from "@/ui/atoms";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function BlogHomePage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: posts } = await supabase.from("posts").select("*");

  return (
    <section className="grid gap-6">
      <Disclaimer>
        este blog solo pretende exponer pensamientos aleatorios que tengo sobre
        diversos temas, lo hago por y para mi, so warever.
      </Disclaimer>
      <ul className="flex flex-col gap-2">
        {posts?.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="border border-transparent px-2 py-1 hover:border-white"
          >
            {`${post.title}`}
          </Link>
        ))}
      </ul>
    </section>
  );
}
