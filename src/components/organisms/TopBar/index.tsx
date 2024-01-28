import { Avatar, CartButton, Logo } from 'components/atoms'

import S from './styles.module.scss'

export const TopBar = () => (
  <div className={S.container}>
    <nav className={S.nav}>
      <Logo />
      <div className={S.wrapper_right}>
        <CartButton />
        <Avatar name="John N. Doe" />
      </div>
    </nav>
  </div>
)
