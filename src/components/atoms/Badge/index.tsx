import { clsx } from 'clsx'

import S from './styles.module.scss'

import type { BadgeProps } from './types'

export const Badge = ({ label, color = 'gray' }: BadgeProps) => (
  <span className={clsx(S.badge, S[`badge_colors--${color}`])}>{label}</span>
)
