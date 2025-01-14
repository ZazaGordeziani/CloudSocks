import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Langtoggle = () => {
    const location = useLocation()
    const langSegment = location.pathname.split('/')
    const validLangs = ['en', 'ka']
    const lang = langSegment[1]
    const navigate = useNavigate()
    const currentPath = window.location.pathname.split('/').slice(2).join('/')
    const { t, i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const handleLanguageChange = (selectedLang: string) => {
        i18n.changeLanguage(selectedLang)
        navigate(`/${selectedLang}/${currentPath}`)
        setOpen(false)
    }

    if (validLangs.includes(lang) && i18n.language !== lang) {
        i18n.changeLanguage(lang)
    }

    if (!validLangs.includes(lang)) {
        return <Navigate to="/ka/home" />
    }

    return (
        <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
            {/* Dropdown trigger */}
            <DropdownMenuPrimitive.Trigger
                asChild
                className="inline-flex h-10 w-10 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                type="button"
                aria-haspopup="menu"
                aria-expanded={open ? 'true' : 'false'}
                data-state={open ? 'open' : 'closed'}
            >
                <button
                    className="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-10 w-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    type="button"
                    id="radix-:re:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                    >
                        <path
                            d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                        <path
                            d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                        <path
                            d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                        <path
                            d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </DropdownMenuPrimitive.Trigger>

            {/* Dropdown Menu Content */}
            <DropdownMenuPrimitive.Content
                data-side="bottom"
                data-align="end"
                role="menu"
                aria-orientation="vertical"
                data-state="open"
                data-radix-menu-content=""
                id="radix-:r2:"
                aria-labelledby="radix-:r1:"
                className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                tabIndex={-1}
                data-orientation="vertical"
                style={
                    {
                        '--radix-dropdown-menu-content-transform-origin':
                            'var(--radix-popper-transform-origin)',
                        '--radix-dropdown-menu-content-available-width':
                            'var(--radix-popper-available-width)',
                        '--radix-dropdown-menu-content-available-height':
                            'var(--radix-popper-available-height)',
                        '--radix-dropdown-menu-trigger-width':
                            'var(--radix-popper-anchor-width)',
                        '--radix-dropdown-menu-trigger-height':
                            'var(--radix-popper-anchor-height)',
                        pointerEvents: 'auto',
                    } as React.CSSProperties
                } // Add type assertion here
            >
                <div
                    role="menuitem"
                    className="[&amp;>svg]:size-4 [&amp;>svg]:shrink-0 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    tabIndex={-1}
                    data-orientation="vertical"
                    data-radix-collection-item=""
                    onClick={() => handleLanguageChange('en')} // Change language to English
                >
                    {t('English')}
                </div>

                <div
                    role="menuitem"
                    className="[&amp;>svg]:size-4 [&amp;>svg]:shrink-0 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    tabIndex={-1}
                    data-orientation="vertical"
                    data-radix-collection-item=""
                    onClick={() => handleLanguageChange('ka')} // Change language to Georgian
                >
                    {t('ქართული')}
                </div>
            </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
    )
}

export default Langtoggle

{
    /* <div data-side="bottom" data-align="end" role="menu" aria-orientation="vertical" data-state="open" data-radix-menu-content="" dir="ltr" id="radix-:r2:" aria-labelledby="radix-:r1:" class="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" tabindex="-1" data-orientation="vertical" style="outline: none; --radix-dropdown-menu-content-transform-origin: var(--radix-popper-transform-origin); --radix-dropdown-menu-content-available-width: var(--radix-popper-available-width); --radix-dropdown-menu-content-available-height: var(--radix-popper-available-height); --radix-dropdown-menu-trigger-width: var(--radix-popper-anchor-width); --radix-dropdown-menu-trigger-height: var(--radix-popper-anchor-height); pointer-events: auto;"><div role="menuitem" class="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;>svg]:size-4 [&amp;>svg]:shrink-0" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">English</div><div role="menuitem" class="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;>svg]:size-4 [&amp;>svg]:shrink-0" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">ქართული</div></div> */
}

;<button
    className="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-10 w-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    type="button"
    id="radix-:re:"
    aria-haspopup="menu"
    aria-expanded="false"
    data-state="closed"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
    <span className="sr-only">Toggle theme</span>
</button>
