// components/button.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const button = cva(
  [
    'font-jaro',
    'transition-colors',
    'text-center',
    'inline-flex',
    'justify-center',
    'items-center',
    'px-4',
    'py-8',
    'md:px-8',
    'md:py-6',
    'uppercase',
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
        ],
        tertiary: [
          'bg-black',
          'text-white',
          'text-2xl',
          'hover:text-green',
          'active:text-teal',
          'label',
        ],
      },
      size: {
        full: ['w-full'],
        fit: ['w-fit'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'fit',
    },
  },
);

export type ButtonProps = Extend<'a', VariantProps<typeof button> & { label: string }>;
