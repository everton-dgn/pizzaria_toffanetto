import Link from 'next/link'

import S from './styles.module.scss'

export const TopBar = () => (
  <div className={S.container}>
    <div className={S.nav}>
      <nav className={S.wrapper}>
        <Link href="/">
          <span className={S.logo}>
            <img
              src="/img/logo-x.png"
              alt="Pizzaria Toffanetto"
              width="240"
              height="50"
            />
          </span>
        </Link>
      </nav>
    </div>
  </div>
)
