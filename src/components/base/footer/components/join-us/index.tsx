import { useTranslation } from 'react-i18next'

const JoinUs = () => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-6">
            <h2 className="pb-3 text-lg lg:text-2xl"> {t('footer-join')}</h2>
            <div className="flex flex-row gap-5">
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="fill-current text-white hover:text-orange-500"
                        // fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="fill-white md:fill-inherit"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 9.05028C0 13.5251 3.25 17.2458 7.5 18V11.5642H5.25V9.05028H7.5V7.03911C7.5 4.77654 8.95 3.51955 11 3.51955C11.65 3.51955 12.35 3.62011 13 3.72067V6.03352H11.85C10.75 6.03352 10.5 6.58659 10.5 7.2905V9.05028H12.9L12.5 11.5642H10.5V18C14.75 17.2458 18 13.5251 18 9.05028C18 4.07263 13.95 0 9 0C4.05 0 0 4.07263 0 9.05028Z"
                            // fill="#fff"
                        ></path>
                    </svg>
                </a>

                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        className="fill-current text-white hover:text-orange-500"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="fill-white md:fill-inherit"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.56227 0.327813C6.52228 0.284125 6.82903 0.273438 9.2733 0.273438H9.27049C11.7155 0.273438 12.0211 0.284125 12.9812 0.327813C13.9393 0.371688 14.5937 0.523375 15.1674 0.745938C15.7599 0.975625 16.2606 1.28313 16.7612 1.78375C17.2618 2.284 17.5693 2.78612 17.8 3.37806C18.0212 3.95031 18.1731 4.60431 18.2181 5.56244C18.2612 6.52244 18.2725 6.82919 18.2725 9.27344C18.2725 11.7177 18.2612 12.0237 18.2181 12.9837C18.1731 13.9414 18.0212 14.5956 17.8 15.1681C17.5693 15.7598 17.2618 16.2619 16.7612 16.7622C16.2611 17.2628 15.7597 17.5711 15.168 17.8009C14.5954 18.0235 13.9406 18.1752 12.9825 18.2191C12.0225 18.2628 11.7166 18.2734 9.27218 18.2734C6.82809 18.2734 6.52153 18.2628 5.56152 18.2191C4.60357 18.1752 3.94937 18.0235 3.37674 17.8009C2.78517 17.5711 2.28304 17.2628 1.78298 16.7622C1.28253 16.2619 0.975031 15.7598 0.744966 15.1679C0.522589 14.5956 0.3709 13.9416 0.326837 12.9835C0.283336 12.0235 0.272461 11.7177 0.272461 9.27344C0.272461 6.82919 0.283711 6.52225 0.326649 5.56225C0.369774 4.6045 0.521651 3.95031 0.744778 3.37788C0.975406 2.78612 1.28291 2.284 1.78354 1.78375C2.28379 1.28331 2.78592 0.975813 3.37787 0.745938C3.95012 0.523375 4.60413 0.371688 5.56227 0.327813ZM12.9975 4.46927C12.9975 3.87284 13.4813 3.38965 14.0775 3.38965C14.6738 3.38965 15.1575 3.87302 15.1575 4.46927C15.1575 5.06552 14.6738 5.54927 14.0775 5.54927C13.4813 5.54927 12.9975 5.06552 12.9975 4.46927ZM4.65142 9.2734C4.65142 6.72096 6.72088 4.65152 9.27335 4.65152C11.8258 4.65152 13.8945 6.72096 13.8945 9.2734C13.8945 11.8258 11.8258 13.8943 9.27335 13.8943C6.72088 13.8943 4.65142 11.8258 4.65142 9.2734ZM12.2734 9.2734C12.2734 7.61646 10.9301 6.2734 9.27335 6.2734C7.61639 6.2734 6.27332 7.61646 6.27332 9.2734C6.27332 10.9301 7.61639 12.2734 9.27335 12.2734C10.9301 12.2734 12.2734 10.9301 12.2734 9.2734Z"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default JoinUs
