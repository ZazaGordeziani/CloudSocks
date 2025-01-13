import React from 'react'

const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="">
            <a className="text-2xl font-bold text-black text-inherit dark:text-white">
                {title}
            </a>
        </div>
    )
}

export default HeaderTitle
