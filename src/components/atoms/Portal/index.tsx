'use client'

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

import { createPortal } from 'react-dom'

import type { PortalProps } from './types'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const Portal = forwardRef<Element, PortalProps>(
  ({ children, container }, ref) => {
    const [mountNode, setMountNode] = useState<Element>(document.body)
    const childRef = useRef<HTMLDivElement>(null)

    useIsomorphicLayoutEffect(() => {
      setMountNode(container || document.body)
    }, [container])

    useImperativeHandle(ref, () => mountNode || childRef.current, [mountNode])

    return mountNode ? (
      createPortal(children, mountNode)
    ) : (
      <div ref={childRef}>{children}</div>
    )
  }
)
