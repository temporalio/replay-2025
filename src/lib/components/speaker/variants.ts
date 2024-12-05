import { cva, type VariantProps } from 'class-variance-authority';

export const speaker = cva(['group', 'text-black', 'flex'], {
  variants: {
    type: {
      keynote: ['bg-green', 'w-full', '2xl:w-80', '2xl:flex-col'],
      speaker: ['bg-teal', 'w-60', 'flex-col'],
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
        keynote: ['max-w-60', 'md:w-80', 'md:max-w-80'],
        speaker: ['w-60'],
      },
    },
  },
);

export type SpeakerProps = VariantProps<typeof speaker> &
  VariantProps<typeof portrait> & {
    image: string;
    name: string;
    company: string;
    jobTitle: string;
  };
