import { cva, type VariantProps } from 'class-variance-authority';

export const speaker = cva(['group', 'text-black', 'flex', 'w-full', 'flex-col'], {
  variants: {
    type: {
      keynote: ['bg-green', '2xl:w-80', 'md:flex-row', 'md:text-2xl', 'xl:flex-col'],
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
    'w-full',
  ],
  {
    variants: {
      type: {
        keynote: ['w-full', 'md:w-80', 'md:max-w-80'],
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
      keynote: ['md:text-3xl'],
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
