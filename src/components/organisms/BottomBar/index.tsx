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

import { NAV_LINKS } from 'constants/navLinks'

import S from './styles.module.scss'

const icons: Record<string, ReactElement> = {
  home: <IconHome />,
  search: <IconSearch />,
  orders: <IconOrders />,
  profile: <IconProfile />
}

export const BottomBar = () => {
  const pathname = usePathname()
  const isActiveLink = (route: string) => route === pathname

  return (
    <nav className={S.container}>
      <ul className={S.wrapper}>
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
