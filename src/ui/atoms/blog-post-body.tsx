import { Post } from "@/models/posts";
import { BlogPostContent, Disclaimer } from ".";
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
    <section className="grid gap-6">
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
          este audio con mi voz suena como mi voz, parece mi voz, sabe a mi voz,
          pero no es mi voz. Es un modelo de inteligencia artificial que utilizo
          como esclavo personal para que lea mis posts.
        </Disclaimer>
      </section>
      <section>
        <BlogPostContent>{content}</BlogPostContent>
      </section>
    </section>
  );
}

export default BlogPostBody;
