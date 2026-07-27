import { useEffect, useRef, useState } from "react"
import type { RefObject } from "react"

type InViewResult = [RefObject<HTMLDivElement | null>, boolean] & {
  ref: RefObject<HTMLDivElement | null>
  isInView: boolean
}

export function useInView(threshold = 0.15): InViewResult {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  // Supports both `const { ref, isInView } = useInView()` and
  // `const [ref, inView] = useInView()` call styles.
  const result = [ref, isInView] as unknown as InViewResult
  result.ref = ref
  result.isInView = isInView
  return result
}
