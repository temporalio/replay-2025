import type { Entry } from 'contentful';
import type { TypeSponsorSkeleton, TypeSponsor } from '../generated-types';
import { toImage, type Image } from './image';
import type { ContentType } from '../utilities/content-type';
import { isType } from '$lib/utilities/is-type';

export type Sponsor = {
  name: string;
  sponsorType: 'Elite' | 'Impact' | 'Premier';
  darkLogo: Image | undefined;
  lightLogo: Image | undefined;
  colorLogo: Image | undefined;
  description: string | undefined;
  externalUrl: string | undefined;
  contentType: ContentType<TypeSponsor<'WITHOUT_UNRESOLVABLE_LINKS', never>>;
};

export const toSponsor = (
  sponsor: Entry<TypeSponsorSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined,
): Sponsor | undefined => {
  if (sponsor === undefined) return;
  return {
    name: sponsor.fields.name,
    sponsorType: sponsor.fields.sponsorType,
    darkLogo: toImage(sponsor.fields.darkLogo),
    lightLogo: toImage(sponsor.fields.lightLogo),
    colorLogo: toImage(sponsor.fields.colorLogo),
    description: sponsor.fields.description,
    externalUrl: sponsor.fields.externalUrl,
    contentType: 'sponsor',
  };
};

export const toSponsors = (
  items:
    | (Entry<TypeSponsorSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined)[]
    | undefined,
): Sponsor[] => (items ? items.map(toSponsor).filter(isType<Sponsor>) : []);
