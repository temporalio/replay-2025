import { cva, type VariantProps } from 'class-variance-authority';

export const speaker = cva(['group', 'text-black', 'flex', 'w-full', 'flex-col'], {
  variants: {
    type: {
      keynote: ['bg-green', 'xl:w-[22.5rem]', 'sm:flex-row', 'md:text-2xl', 'xl:flex-col'],
      speaker: ['bg-teal', 'flex-col'],
    },
  },
  defaultVariants: {
    type: 'speaker',
  },
});

export const portrait = cva(
  [
    'relative',
    'aspect-[9/10]',
    'w-full',
    'bg-center',
    'bg-no-repeat',
    'bg-cover',
    'grayscale',
    'transition-all',
    'group-hover:ring-[16px]',
    'group-hover:ring-inset',
    'group-hover:ring-pink',
    'group-hover:grayscale-0',
  ],
  {
    variants: {
      type: {
        keynote: ['w-full', 'md:max-w-[22.5rem]'],
        speaker: [],
      },
    },
    defaultVariants: {
      type: 'speaker',
    },
  },
);

export const speakerName = cva(['text-lg', 'font-semibold'], {
  variants: {
    type: {
      keynote: ['md:text-2xl'],
      speaker: [],
    },
    defaultVariants: {
      type: 'speaker',
    },
  },
});

export type SpeakerProps = VariantProps<typeof speaker> &
  VariantProps<typeof portrait> &
  VariantProps<typeof speakerName> & {
    image: string;
    name: string;
    company: string;
    jobTitle: string;
  };
