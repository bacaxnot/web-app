import { Post } from "@/models/posts";
import Link from "next/link";
import { BlogPostMeta } from ".";

const BlogPostHeader = ({
  post,
  mode = "text",
}: {
  post: Post;
  mode?: "text" | "dev";
}) => {
  const { slug, title } = post;

  const modeSwitcher = {
    text: {
      icon: "</>",
      link: `/blog/${slug}/hacker`,
    },
    dev: {
      icon: "abc",
      link: `/blog/${slug}`,
    },
  };

  return (
    <section className="grid gap-1">
      <section className="flex items-start justify-between gap-2">
        <h1>{title}</h1>
        <Link className="px-1" href={modeSwitcher[mode].link}>
          {modeSwitcher[mode].icon}
        </Link>
      </section>
      {mode === "text" && <BlogPostMeta post={post} />}
    </section>
  );
};

export default BlogPostHeader;
