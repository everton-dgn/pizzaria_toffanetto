'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactElement } from 'react'

import { clsx } from 'clsx'
import { FiSearch as IconSearch } from 'react-icons/fi'
import {
  HiOutlineHome as IconHome,
  HiOutlineClipboardList as IconOrders,
  HiOutlineUser as IconProfile
} from 'react-icons/hi'
import { RiHeart3Line as IconFavorite } from 'react-icons/ri'

import { NAV_LINKS } from 'constants/navLinks'

const icons: Record<string, ReactElement> = {
  home: <IconHome />,
  search: <IconSearch />,
  orders: <IconOrders />,
  favorite: <IconFavorite />,
  profile: <IconProfile />
}

export const BottomBar = () => {
  const pathname = usePathname()
  const isActiveLink = (route: string) => route === pathname

  return (
    <nav className="invisible fixed inset-x-0 z-bottom-bar h-3 animate-[visibility_0.5s_linear_forwards,_move-up_0.5s_ease-in-out_forwards] bg-light-blue-hint p-2 opacity-0 shadow-bottom-bar col-full b-0 sm:hidden">
      <ul className="h-full ai-center f-nowrap jc-around row-full">
        {NAV_LINKS.map(({ href, label, icon }) => (
          <li key={href}>
            <Link
              href={href}
              prefetch={false}
              title={`Ir para Página de ${label}`}
              className={clsx(
                isActiveLink(href)
                  ? '[&>svg>path]:tx-green [&>svg]:tx-green'
                  : '[&>svg>path]:tx-grey-500 [&>svg]:tx-grey-500',
                'size-fit ai-center col [&>svg]:min-size-5'
              )}
            >
              {icons[icon]}
              <span className="ls-[0.3px] fs-xs-semibold-grey-dark">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
