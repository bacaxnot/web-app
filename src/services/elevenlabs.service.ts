import {
  ElevenlabsTTSReqBody,
  ElevenlabsTTSReqHeaders,
} from "@/models/api.elevenlabs";
import { ErrorOrData } from "@/types";

const API_BASE_URL = "https://api.elevenlabs.io";

export async function textToSpeech({
  text,
}: {
  text: string;
}): Promise<ErrorOrData<ArrayBuffer>> {
  const API_PATH = `v1/text-to-speech/${process.env.ELEVEN_LABS_VOICE_ID}`;

  let result: ErrorOrData<ArrayBuffer> = {
    error: { message: "" },
    data: null,
  };

  const headers: ElevenlabsTTSReqHeaders = {
    accept: "audio/mpeg",
    "Content-Type": "application/json",
    "xi-api-key": process.env.ELEVEN_LABS_KEY!,
  };
  const body: ElevenlabsTTSReqBody = {
    text,
    model_id: "eleven_multilingual_v2",
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.75,
      style: 0,
      use_speaker_boost: true,
    },
  };

  const audioResponse = await fetch(`${API_BASE_URL}/${API_PATH}`, {
    headers,
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!audioResponse.ok)
    result.error = {
      message: `Error fetching audio from Eleven Labs API: ${audioResponse.statusText}`,
    };

  try {
    const audioBuffer = await audioResponse.arrayBuffer();
    result = { error: null, data: audioBuffer };
  } catch (e) {
    result.error = { message: `Error parsing audio response: ${e}` };
  }

  return result;
}
