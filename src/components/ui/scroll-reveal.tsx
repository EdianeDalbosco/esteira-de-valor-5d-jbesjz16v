import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function ScrollReveal({
  children,
  className,
  animation = 'animate-fade-in-up',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  animation?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('opacity-0', isVisible ? cn(animation, 'opacity-100') : '', className)}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  )
}
