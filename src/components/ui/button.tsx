import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button-variants'
import Spinner from '@/pages/common-components/spinner'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            loading,
            children,
            ...props
        },
        ref,
    ) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {loading ? (
                    <div className="flex items-center justify-center">
                        <Spinner />
                    </div>
                ) : (
                    children
                )}{' '}
            </Comp>
        )
    },
)
Button.displayName = 'Button'

export { Button }
