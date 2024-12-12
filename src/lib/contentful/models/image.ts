import { isType } from '$lib/utilities/is-type';
import type { Asset } from 'contentful';

export const getImageUrl = (
  image: Asset<'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined,
): string | undefined => {
  if (!image || !image.fields?.file) return undefined;

  if (typeof window !== 'undefined') {
    const protocol = window.location.protocol;
    return protocol + image.fields.file.url;
  }

  return 'https:' + image.fields.file.url;
};

export type Image = {
  title: string | undefined;
  description: string | undefined;
  url: string | undefined;
};

export const toImage = (
  asset: Asset<'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined,
): Image | undefined => {
  if (asset === undefined) return;
  return {
    title: asset.fields.title,
    description: asset.fields.title,
    url: getImageUrl(asset),
  };
};

export const toImages = (
  assets: (Asset<'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined)[] | undefined,
): Image[] | undefined => {
  return assets?.map(toImage).filter(isType<Image>);
};

export const isImage = (maybeImage: Image | undefined): maybeImage is Image => {
  return maybeImage !== undefined;
};
