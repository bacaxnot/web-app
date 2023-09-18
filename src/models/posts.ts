import { Database } from "./db.supabase";
import { User } from "./users";

type PostEntity = Database["public"]["Tables"]["posts"]["Row"];

export type Post = PostEntity & {
  user: User;
};
