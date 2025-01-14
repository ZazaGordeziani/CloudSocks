import React from 'react'

export const HeaderNavItem: React.FC<{ text: string }> = ({ text }) => {
    return (
        <p className={'hover:text- text-xl text-purple-950 dark:text-white'}>
            {text}
        </p>
    )
}
