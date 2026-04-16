import {
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  children: ReactNode
  delay?: number
}

export function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.18,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return (
    <Component
      {...props}
      className={`reveal ${prefersReducedMotion || visible ? 'reveal--visible' : ''} ${className}`.trim()}
      ref={ref}
      style={
        {
          ...style,
          transitionDelay: `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  )
}
