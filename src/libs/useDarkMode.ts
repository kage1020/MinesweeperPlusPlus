import { useCallback, useEffect } from 'react'

import useSWR from 'swr'

const useDarkMode = () => {
  const { data: isDark, mutate: mutateDark } = useSWR('theme', null, { fallbackData: false })

  const toggleDark = useCallback(() => {
    localStorage.setItem('theme', !isDark ? 'dark' : 'light')
    mutateDark(!isDark)
  }, [isDark, mutateDark])

  useEffect(() => {
    const setting = localStorage.getItem('theme')
    if (
      setting === 'dark' ||
      (!setting && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      mutateDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      mutateDark(false)
    }
  }, [isDark, mutateDark])

  return { isDark, toggleDark }
}

export default useDarkMode
