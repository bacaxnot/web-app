import { Database } from "./db.supabase";

type UserRoleNames = "admin" | "guest";

type RoleEntity = Database["public"]["Tables"]["roles"]["Row"];
type UserEntity = Database["public"]["Tables"]["users"]["Row"];

interface UserRole extends RoleEntity {
  name: UserRoleNames;
}

export type User = UserEntity & {
  role: UserRole;
};
