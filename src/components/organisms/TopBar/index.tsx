import { Avatar, CartButton, Logo } from 'components/atoms'

export const TopBar = () => (
  <div className="sticky z-header h-[50px] border-b-2 border-solid border-secondary-500 bg-primary-500 t-0 col-full">
    <nav className="m-auto h-full flex-nowrap ai-center container-row jc-between">
      <Logo />
      <div className="row flex-nowrap g-24 ai-center">
        <CartButton />
        <Avatar name="John N. Doe" />
      </div>
    </nav>
  </div>
)
