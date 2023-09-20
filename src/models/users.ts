import { Database } from "./db.supabase";

export type UserRoles = "admin" | "guest";

type RoleEntity = Database["public"]["Tables"]["roles"]["Row"];
type UserEntity = Database["public"]["Tables"]["users"]["Row"];

export type User = UserEntity & Pick<RoleEntity, "name">;
