"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

const PublishPostBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="border border-transparent py-1.5 hover:border-white"
      type="submit"
    >
      {pending ? "loading..." : "publicar"}
    </button>
  );
};

export default PublishPostBtn;
