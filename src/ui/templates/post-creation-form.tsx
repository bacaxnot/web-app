import { createPostAction } from "@/actions/posts.actions";

const PostCreationForm = () => {
  return (
    <form className="grid gap-4" action={createPostAction}>
      <label htmlFor="post-slug" className="grid gap-2">
        <span>slug</span>
        <input type="text" name="post-slug" id="post-slug" required />
      </label>
      <label htmlFor="post-title" className="grid gap-2">
        <span>título</span>
        <input type="text" name="post-title" id="post-title" required />
      </label>
      <label htmlFor="post-content" className="grid gap-2">
        <span>contenido</span>
        <textarea name="post-content" id="post-content" required />
      </label>
      <button
        className="border border-transparent py-1.5 hover:border-white"
        type="submit"
      >
        publicar
      </button>
    </form>
  );
};

export default PostCreationForm;
