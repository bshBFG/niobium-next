import { useEffect, useMemo, useState } from 'react'

type Screens = {
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}

enum ScreenTypes {
  'base' = 'base',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
  '2xl' = '2xl',
}

const screens: Screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

const getDeviceConfig = (width: number): ScreenTypes | null => {
  if (width >= screens.sm && width < screens.md) {
    return ScreenTypes.sm
  } else if (width >= screens.md && width < screens.lg) {
    return ScreenTypes.md
  } else if (width >= screens.lg && width < screens.xl) {
    return ScreenTypes.lg
  } else if (width >= screens.lg && width < screens['2xl']) {
    return ScreenTypes.xl
  } else if (width >= screens['2xl']) {
    return ScreenTypes['2xl']
  } else {
    return ScreenTypes.base
  }
}

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState<ScreenTypes | null>(() => null)

  useEffect(() => {
    if (!brkPnt && window) {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }
  }, [brkPnt])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const calcInnerWidth = () => {
      clearTimeout(timeout)
      timeout = setTimeout(
        () => setBrkPnt(getDeviceConfig(window.innerWidth)),
        200
      )
    }

    window.addEventListener('resize', calcInnerWidth)

    return () => window.removeEventListener('resize', calcInnerWidth)
  }, [])

  return brkPnt
}

export { useBreakpoint, screens, ScreenTypes }
