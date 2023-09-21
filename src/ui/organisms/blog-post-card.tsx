import { contentExcerpt, dateFormatter } from "@/lib/formatters";
import { Post } from "@/models/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UsernameTag } from "../atoms";
import { cn } from "@bacaxnot/utils";

const BlogPostCard = ({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) => {
  const { slug, title, content, image_url, created_at, user } = post;
  const username = user?.username ?? "anonimo";

  const href = `/blog/${slug}`;
  const containerStyles = cn("@container/blogpostcard", className);
  return (
    <div className={containerStyles}>
      <article className="grid gap-4 @3xl:grid-cols-[1.5fr,_1fr]">
        <Link
          href={href}
          className="relative block h-[200px] w-full @3xl/:h-[260px]"
        >
          <Image src={image_url} fill alt={title} className="object-cover" />
        </Link>
        <section className="flex flex-col items-start justify-between gap-3">
          <Link href={href}>
            <h2>{title}</h2>
          </Link>
          <Link href={href}>
            <p>{contentExcerpt(content) + "..."}</p>
          </Link>
          <span className="flex w-full justify-between">
            <UsernameTag username={username} />
            <span>{dateFormatter(created_at)}</span>
          </span>
        </section>
      </article>
    </div>
  );
};

export default BlogPostCard;
