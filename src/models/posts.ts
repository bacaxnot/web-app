import { Database } from "./db.supabase";
import { User } from "./users";

type PostEntity = Database["public"]["Tables"]["posts"]["Row"];

export type Post = PostEntity & {
  user: User | null;
};

export type PostCreationFields = Pick<Post, "title" | "content">;
export type PostCreationReqFields = PostCreationFields &
  Pick<Post, "slug" | "audio_url" | "image_url">;

export type PostUpdateFields = Partial<PostCreationFields>;
