import { createPostAction } from "@/actions/posts.actions";
import { PublishPostBtn } from "../atoms";

const PostCreationForm = () => {
  return (
    <form className="grid gap-4" action={createPostAction}>
      <label htmlFor="post-title" className="grid gap-2">
        <span>título</span>
        <input type="text" name="post-title" id="post-title" required />
      </label>
      <label htmlFor="post-content" className="grid gap-2">
        <span>contenido</span>
        <textarea name="post-content" id="post-content" required />
      </label>
      <PublishPostBtn />
    </form>
  );
};

export default PostCreationForm;
