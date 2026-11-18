// lib/config.ts
export const BASE_PATH = "/hydrocell";

export const assetPath = (path: string): string =>
  `${BASE_PATH}/${path.replace(/^\/+/, "")}`;