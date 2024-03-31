import { Avatar, CartButton, Logo } from 'components/atoms'

export const TopBar = () => (
  <div className="sticky z-header h-3 bg-primary-500 bw-b-2-secondary-500 col-full t-0">
    <nav className="m-auto h-full ai-center container-row f-nowrap jc-between">
      <Logo />
      <div className="ai-center f-nowrap g-6 row">
        <CartButton />
        <Avatar name="John N. Doe" />
      </div>
    </nav>
  </div>
)
