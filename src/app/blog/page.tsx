import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function BlogHomePage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select("*");

  return (
    <div>
      <pre className="whitespace-pre-wrap break-words">
        {JSON.stringify(posts, null, 2)}
      </pre>
    </div>
  );
}
