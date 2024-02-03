'use client'

import { CartButton } from 'components/atoms'

import S from './styles.module.scss'

export const BottomBar = () => (
  <div className={S.container}>
    <nav className={S.nav}>
      <div className={S.wrapper_right}>
        <CartButton />
      </div>
    </nav>
  </div>
)
