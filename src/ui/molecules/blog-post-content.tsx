import React from "react";

const BlogPostContent = ({ children }: { children: string }) => {
  return <pre className="whitespace-pre-wrap break-words">{children}</pre>;
};

export default BlogPostContent;
