import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Link to="/">
            <div className="">
                <a className="text-3xl font-bold text-inherit text-white hover:text-orange-500">
                    {title}
                </a>
            </div>
        </Link>
    )
}

export default HeaderTitle
