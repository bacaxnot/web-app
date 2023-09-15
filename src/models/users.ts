export type UserRole = "admin" | "guest";

export type User = {
  id: string;
  name: string;
  username: string;
  role: UserRole;
  avatar_url: string;
};
