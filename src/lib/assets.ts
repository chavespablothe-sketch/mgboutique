const LOVABLE_ASSET_ORIGIN = "https://mgboutique.lovable.app";

export const assetUrl = (url: string) => {
  if (url.startsWith("/__l5e/assets-v1/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }

  return url;
};