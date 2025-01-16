import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Link to="/">
            <div className="">
                <a className="text-2xl font-bold text-inherit text-white">
                    {title}
                </a>
            </div>
        </Link>
    )
}

export default HeaderTitle
