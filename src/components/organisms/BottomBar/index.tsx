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

import S from './styles.module.scss'

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
    <nav
      className={clsx(
        'fixed inset-x-0 bottom-0 z-bottom-bar h-[50px] bg-light-blue-hint p-8 shadow-bottom-bar col-full',
        S.container
      )}
    >
      <ul
        className={clsx(
          'h-full flex-nowrap jc-around ai-center row-full',
          S.wrapper
        )}
      >
        {NAV_LINKS.map(({ href, label, icon }) => (
          <li key={href}>
            <Link
              href={href}
              prefetch={false}
              title={`Ir para Página de ${label}`}
              className={clsx(isActiveLink(href) && S.active)}
            >
              {icons[icon]}
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
