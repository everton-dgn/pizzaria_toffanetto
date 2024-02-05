export type NavLink = Array<{ href: string; label: string; icon: string }>

export const NAV_LINKS: NavLink = [
  { href: '/', label: 'Início', icon: 'home' },
  { href: '/busca', label: 'Buscar', icon: 'search' },
  { href: '/pedidos', label: 'Pedidos', icon: 'orders' },
  { href: '/favoritos', label: 'Favoritos', icon: 'favorite' },
  { href: '/perfil', label: 'Perfil', icon: 'profile' }
]
