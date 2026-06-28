export const LOVABLE_ASSET_ORIGIN = "https://mgboutique.lovable.app";
export const LOVABLE_ASSET_PATH_PREFIX = "/__l5e/assets-v1/";

export const assetUrl = (url?: string | null) => {
  if (!url) return "";

  const value = url.trim();
  const assetPathIndex = value.indexOf(LOVABLE_ASSET_PATH_PREFIX);

  if (assetPathIndex >= 0) {
    return `${LOVABLE_ASSET_ORIGIN}${value.slice(assetPathIndex)}`;
  }

  return value;
};