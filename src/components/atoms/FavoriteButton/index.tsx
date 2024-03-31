'use client'

import { useState } from 'react'

import { clsx } from 'clsx'

import S from './styles.module.css'

import type { FavoriteButtonProps } from './types'

export const FavoriteButton = ({ className }: FavoriteButtonProps) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <button
      aria-label="Adicionar item aos favoritos"
      title="Adicionar item aos favoritos"
      className={clsx('flex size-32 rounded-circle bg-white center', className)}
      onClick={() => setIsChecked(prev => !prev)}
    >
      <svg
        viewBox="467 392 58 57"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          'size-28 cursor-pointer ov-visible',
          isChecked && S.checked
        )}
      >
        <g fill="none" fillRule="evenodd" transform="translate(467 392)">
          <path
            d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
            className={S.heart}
            fill="#c8cce2"
          />
          <circle
            className={S.main_circ}
            fill="#E2264D"
            opacity="0"
            cx="29.5"
            cy="29.5"
            r="1.5"
          />

          <g className={S.grp7} opacity="0" transform="translate(7 6)">
            <circle className={S.oval1} fill="#9CD8C3" cx="2" cy="6" r="2" />
            <circle className={S.oval2} fill="#8CE8C3" cx="5" cy="2" r="2" />
          </g>

          <g className={S.grp6} opacity="0" transform="translate(0 28)">
            <circle className={S.oval1} fill="#CC8EF5" cx="2" cy="7" r="2" />
            <circle className={S.oval2} fill="#91D2FA" cx="3" cy="2" r="2" />
          </g>

          <g className={S.grp3} opacity="0" transform="translate(52 28)">
            <circle className={S.oval2} fill="#9CD8C3" cx="2" cy="7" r="2" />
            <circle className={S.oval1} fill="#8CE8C3" cx="4" cy="2" r="2" />
          </g>

          <g className={S.grp2} opacity="0" transform="translate(44 6)">
            <circle className={S.oval2} fill="#CC8EF5" cx="5" cy="6" r="2" />
            <circle className={S.oval1} fill="#CC8EF5" cx="2" cy="2" r="2" />
          </g>

          <g className={S.grp5} opacity="0" transform="translate(14 50)">
            <circle className={S.oval1} fill="#91D2FA" cx="6" cy="5" r="2" />
            <circle className={S.oval2} fill="#91D2FA" cx="2" cy="2" r="2" />
          </g>

          <g className={S.grp4} opacity="0" transform="translate(35 50)">
            <circle className={S.oval1} fill="#F48EA7" cx="6" cy="5" r="2" />
            <circle className={S.oval2} fill="#F48EA7" cx="2" cy="2" r="2" />
          </g>

          <g className={S.grp1} opacity="0" transform="translate(24)">
            <circle className={S.oval1} fill="#9FC7FA" cx="2.5" cy="3" r="2" />
            <circle className={S.oval2} fill="#9FC7FA" cx="7.5" cy="2" r="2" />
          </g>
        </g>
      </svg>
    </button>
  )
}
