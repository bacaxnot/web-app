import { getPlaiceholder } from "plaiceholder";

/**
 * Convert a string to a slug
 * @param str - The string to convert to a slug
 * @returns - The slugified string
 * @example
 * ```
 * const slug = sluggify("Hello, World!");
 * console.log(slug); // hello-world
 * ```
 */
export function sluggify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-");
}

/**
 *  Create a blurred image from a given image url using plaiceholder library.
 * @param imageUrl - The url of the image to blur and convert to base64.
 * @returns - The base64 string of the blurred image.
 * @example
 * ```
 * const blurredImage = await createBlurImage("https://example.com/image.png");
 * console.log(blurredImage); // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABpUlEQVQ4T6WUvUoDQRCFv2...
 * ```
 */
export async function createBlurImage(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok)
      throw new Error(`failed to fetch image: ${res.status} ${res.statusText}`);

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    console.log("blurImage: ", base64);
    return base64;
  } catch (err) {
    if (err instanceof Error) console.error(err.stack);
  }
}
