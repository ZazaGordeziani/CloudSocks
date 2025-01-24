import React from 'react'

export const HeaderNavItem: React.FC<{ text: string }> = ({ text }) => {
    return <p className={'text-xl text-white hover:text-orange-500'}>{text}</p>
}
