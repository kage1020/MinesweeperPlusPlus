import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

import useDarkMode from '@libs/useDarkMode'

const ThemeSwitch = () => {
  const { isDark, toggleDark } = useDarkMode()

  return (
    <button
      className='absolute right-4 top-28 z-30 rounded border-[3px] border-gray-900 p-2 duration-300 dark:border-white'
      onClick={() => toggleDark()}
    >
      {isDark && <MdDarkMode color='white' size={30} />}
      {!isDark && <MdOutlineLightMode color='#111827' size={30} />}
    </button>
  )
}

export default ThemeSwitch
