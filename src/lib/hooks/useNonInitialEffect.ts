import { useEffect, EffectCallback, DependencyList, useRef } from 'react'

export const useNonInitialEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
) => {
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      effect()
    }
  }, deps)
}
