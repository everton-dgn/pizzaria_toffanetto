import { Avatar, CartButton, Logo } from 'components/atoms'

export const TopBar = () => (
  <div className="sticky z-header h-[50px] border-b-2 border-solid border-secondary-500 bg-primary-500 col-full t-0">
    <nav className="m-auto h-full flex-nowrap jc-between ai-center container-row">
      <Logo />
      <div className="flex-nowrap ai-center row g-24">
        <CartButton />
        <Avatar name="John N. Doe" />
      </div>
    </nav>
  </div>
)
