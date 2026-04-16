import SimpleParallax from 'simple-parallax-js'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Orientation =
  | 'up'
  | 'right'
  | 'down'
  | 'left'
  | 'up left'
  | 'up right'
  | 'down left'
  | 'down right'

type ParallaxImageProps = {
  alt: string
  className?: string
  orientation?: Orientation
  scale?: number
  src: string
}

export function ParallaxImage({
  alt,
  className,
  orientation = 'up',
  scale = 1.12,
  src,
}: ParallaxImageProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const image = <img alt={alt} className={className} src={src} />

  if (prefersReducedMotion) {
    return image
  }

  return (
    <SimpleParallax
      delay={0.5}
      maxTransition={42}
      orientation={orientation}
      overflow
      scale={scale}
      transition="cubic-bezier(0.22, 1, 0.36, 1)"
    >
      {image}
    </SimpleParallax>
  )
}
