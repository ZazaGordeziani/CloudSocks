import React from 'react'

export const HeaderNavItem: React.FC<{ text: string }> = ({ text }) => {
    return (
        <p
            className={
                'text-xl hover:text-orange-500 dark:text-white dark:hover:text-orange-500'
            }
        >
            {text}
        </p>
    )
}
