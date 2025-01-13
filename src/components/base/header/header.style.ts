import { cva } from 'class-variance-authority'

export const header = cva(
    [
        // "xl: w-xl",

        'h-[70px]',
        'w-full',
        'flex',
        'justify-between',
        'items-center',
        'px-4',
        'py-4',
        'mx-auto',
        'bg-main-blue	',
    ],
    {
        variants: {
            type: {
                light: ['bg-slate-400'],
                dark: ['bg-black'],
            },
        },
    },
)
