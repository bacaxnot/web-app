export type ElevenlabsVoiceModel =
  | "eleven_multilingual_v2"
  | "eleven_multilingual_v1"
  | "eleven_english_v1";

export interface ElevenlabsVoiceSettings {
  stability: number;
  similarity_boost: number;
  style: number;
  use_speaker_boost: boolean;
}

export interface ElevenlabsTTSReqHeaders extends Record<string, string> {
  accept: "audio/mpeg" | string;
  "Content-Type": "application/json" | string;
  "xi-api-key": string;
}

export interface ElevenlabsTTSReqBody {
  text: string;
  model_id: ElevenlabsVoiceModel;
  voice_settings: ElevenlabsVoiceSettings;
}
