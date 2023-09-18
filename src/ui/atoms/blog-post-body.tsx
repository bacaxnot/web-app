import { Post } from "@/models/posts";
import { Disclaimer } from ".";

const BlogPostBody = ({ post }: { post: Post }) => {
  const { audio_url, content } = post;

  return (
    <section className="grid gap-6">
      <section className="grid gap-2">
        <audio controls src={audio_url!} className="w-full" />
        <Disclaimer>
          este audio con mi voz suena como mi voz, parece mi voz, sabe a mi voz,
          pero no es mi voz. Es un modelo de inteligencia artificial que utilizo
          como esclavo personal para que lea mis posts.
        </Disclaimer>
      </section>
      <section>
        <p>{content}</p>
      </section>
    </section>
  );
};

export default BlogPostBody;
