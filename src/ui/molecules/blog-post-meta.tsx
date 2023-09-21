import { dateFormatter } from "@/lib/formatters";
import { Post } from "@/models/posts";
import React from "react";
import { UsernameTag } from "../atoms";

const BlogPostMeta = ({ post }: { post: Post }) => {
  const { created_at, user } = post;
  const username = user?.username || "anonimo";

  return (
    <section className="flex justify-between gap-2 text-sm">
      <span>{dateFormatter(created_at)}</span>
      <UsernameTag username={username} />
    </section>
  );
};

export default BlogPostMeta;
