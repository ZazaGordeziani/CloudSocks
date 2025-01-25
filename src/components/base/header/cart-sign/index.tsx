import { Link } from 'react-router-dom'

const CartSign = () => {
    return (
        <Link to="cart" className="group h-10 w-10">
            {' '}
            <svg
                className="icon icon-cart-empty fill-current text-main-blue hover:text-orange-500"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.33398 3.3335H6.23399C8.03399 3.3335 9.45065 4.8835 9.30065 6.66683L7.91732 23.2668C7.68398 25.9835 9.83397 28.3168 12.5673 28.3168H30.3173C32.7173 28.3168 34.8173 26.3502 35.0007 23.9668L35.9006 11.4668C36.1006 8.70017 34.0006 6.45015 31.2173 6.45015H9.70066"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M27.0833 36.6667C28.2339 36.6667 29.1667 35.7339 29.1667 34.5833C29.1667 33.4327 28.2339 32.5 27.0833 32.5C25.9327 32.5 25 33.4327 25 34.5833C25 35.7339 25.9327 36.6667 27.0833 36.6667Z"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M13.7493 36.6667C14.8999 36.6667 15.8327 35.7339 15.8327 34.5833C15.8327 33.4327 14.8999 32.5 13.7493 32.5C12.5988 32.5 11.666 33.4327 11.666 34.5833C11.666 35.7339 12.5988 36.6667 13.7493 36.6667Z"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M15 13.3335H35"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </Link>
    )
}

export default CartSign
