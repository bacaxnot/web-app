import { ErrorOrData } from "@/types";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });
const MAX_TOKENS = 1000;

export async function generateImageFromText({
  content,
}: {
  content: string;
}): Promise<ErrorOrData<{ url: string }>> {
  let result: ErrorOrData<{ url: string }> = {
    error: { message: "" },
    data: null,
  };

  const prompt = generatePromptForBlogPost({ content });
  console.log("prompt: ", prompt);
  try {
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url",
    });

    if (response.data[0].url === undefined)
      throw new Error("No image generated");

    const { url } = response.data[0];
    result = { error: null, data: { url } };
  } catch (e) {
    result = {
      error: { message: `Error generating image from DallE: ${e}` },
      data: null,
    };
  }
  return result;
}

function generatePromptForBlogPost({ content }: { content: string }) {
  const prefix = "";
  const suffix = ".Artistic style.";

  const FIXED_TOKENS = prefix.split(" ").length + suffix.split(" ").length;
  return prefix + content.slice(0, MAX_TOKENS - FIXED_TOKENS) + suffix;
}
