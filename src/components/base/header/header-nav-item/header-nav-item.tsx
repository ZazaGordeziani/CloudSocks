import React from 'react'

export const HeaderNavItem: React.FC<{ text: string }> = ({ text }) => {
    return (
        <p className="text-xl text-purple-950 hover:cursor-pointer hover:text-foreground dark:text-white">
            {text}
        </p>
    )
}
