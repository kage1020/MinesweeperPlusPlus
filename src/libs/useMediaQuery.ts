import { useLayoutEffect, useState } from 'react'

const useMediaQuery = () => {
  const [size, setSize] = useState({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
  })
  useLayoutEffect(() => {
    const isSm = window.matchMedia('(min-width: 640px)').matches
    const isMd = window.matchMedia('(min-width: 768px)').matches
    const isLg = window.matchMedia('(min-width: 1024px)').matches
    const isXl = window.matchMedia('(min-width: 1280px)').matches
    const is2Xl = window.matchMedia('(min-width: 1536px)').matches
    setSize({ isSm, isMd, isLg, isXl, is2Xl })
  }, [])

  return size
}

export default useMediaQuery
