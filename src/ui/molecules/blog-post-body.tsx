import { Post } from "@/models/posts";
import { Disclaimer } from "../atoms";
import BlogPostContent from "./blog-post-content";
import Image from "next/image";

async function BlogPostBody({
  post,
  blurImageURL,
}: {
  post: Post;
  blurImageURL?: string;
}) {
  const { audio_url, content, image_url, title } = post;

  return (
    <section className="grid gap-12">
      <section className="grid gap-2 @container">
        <div className="relative h-60 @md:h-[32rem]">
          <Image
            src={image_url}
            alt={`imagen generada con I.A. que describe: ${title}`}
            className="object-cover"
            fill
            placeholder={blurImageURL ? "blur" : "empty"}
            blurDataURL={blurImageURL || undefined}
          />
        </div>
        <audio controls src={audio_url} className="w-full" />
        <Disclaimer>
          este audio suena como mi voz, pero no lo es. es un modelo de
          inteligencia artificial que utilizo como esclavo personal para que lea
          mis posts. la imagen de arriba también está generada con i.a.
          automáticamente en función del contenido del post. así que si está
          rara, culpen a la i.a.
        </Disclaimer>
      </section>
      <section>
        <BlogPostContent>{content}</BlogPostContent>
      </section>
    </section>
  );
}

export default BlogPostBody;
