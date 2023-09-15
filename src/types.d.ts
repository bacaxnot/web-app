export type ErrorObject = { message: string };
export type ErrorOrData<T = any> =
  | { error: null; data: T }
  | { error: ErrorObject; data: null };
