import React from 'react'

export const HeaderNavItem: React.FC<{ text: string }> = ({ text }) => {
    return (
        <p className={'text-xl text-black dark:text-white lg:text-white'}>
            {text}
        </p>
    )
}
