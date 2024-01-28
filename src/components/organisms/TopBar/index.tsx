import { Avatar, Logo } from 'components/atoms'

import S from './styles.module.scss'

export const TopBar = () => (
  <div className={S.container}>
    <nav className={S.nav}>
      <Logo />
      <div>
        <Avatar
          name="John N. Doe"
          imageUrl="https://avatars.githubusercontent.com/u/8936232?v=4"
        />
      </div>
    </nav>
  </div>
)
