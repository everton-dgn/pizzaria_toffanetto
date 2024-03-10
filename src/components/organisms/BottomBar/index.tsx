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
    <nav className="invisible fixed inset-x-0 bottom-0 z-bottom-bar h-[50px] animate-[visibility_0.5s_linear_forwards,_move-up_0.5s_ease-in-out_forwards] bg-light-blue-hint p-8 opacity-0 shadow-bottom-bar col-full sm:hidden">
      <ul className="h-full flex-nowrap jc-around ai-center row-full">
        {NAV_LINKS.map(({ href, label, icon }) => (
          <li key={href}>
            <Link
              href={href}
              prefetch={false}
              title={`Ir para Página de ${label}`}
              className={clsx(
                isActiveLink(href)
                  ? '[&>svg>path]:text-green [&>svg]:text-green'
                  : '[&>svg>path]:text-grey-500 [&>svg]:text-grey-500',
                'size-fit ai-center col [&>svg]:size-20 [&>svg]:min-h-20 [&>svg]:min-w-20'
              )}
            >
              {icons[icon]}
              <span className="text-12 font-600 tracking-[0.3px] text-grey-dark">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
