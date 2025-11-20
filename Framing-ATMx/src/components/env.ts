import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export function envParse(envNumber: string) {
  const numRaw = parseInt(envNumber || '');
  const numParsed = Number.isInteger(numRaw) ? numRaw : 10;

  return numParsed;
}

export { env };