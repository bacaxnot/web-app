import { clsx } from "clsx";

type ClassRecord = Record<string, boolean>;
type ValidClassName =
  | string
  | number
  | ClassRecord
  | ValidClassName[]
  | undefined
  | null;

/**
 * Joins class names together and returns a string of class names separated by a space character (" ") if the value is truthy.
 * @param classes Class names to join together. If the value is falsy, it won't be included in the output. If the value is an array, it will be flattened. If the value is an object, keys with truthy values will be included in the output. Any falsey values are discarded. Standalone Boolean values are discarded as well.
 * @returns A string of valid classNames separated by a space character (" ")
 */
export function cn(...classes: ValidClassName[]) {
  return clsx(classes);
}
