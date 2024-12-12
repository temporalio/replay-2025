// components/button.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const button = cva(
  [
    'transition-colors',
    'text-center',
    'inline-flex',
    'justify-center',
    'items-center',
    'px-4',
    'py-8',
    'transition-[background-image]',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-pink-to-red',
          'text-white',
          'border-transparent',
          'hover:bg-red-to-pink',
          'active:shadow-lg',
          'title-xs',
          'md:title-small',
          'w-full',
          'md:w-fit',
        ],
        secondary: [
          'bg-blue-to-mint',
          'text-black',
          'hover:bg-none',
          'active:shadow-lg',
          'hover:bg-black',
          'hover:text-teal',
          'title-xs',
          'md:title-small',
          'w-full',
          'md:w-fit',
        ],
        tertiary: [
          'bg-black',
          'text-white',
          'hover:text-green',
          'active:text-teal',
          'label',
          'w-full',
        ],
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
);

export type ButtonProps = Extend<'a', VariantProps<typeof button> & { label: string }>;
