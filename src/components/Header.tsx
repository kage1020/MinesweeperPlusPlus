import Image from 'next/image'

import useDarkMode from '@libs/useDarkMode'
import useGame from '@libs/useGame'

import titleDark from '../../public/title-dark.png'
import titleLight from '../../public/title-light.png'

const Header = () => {
  const { isDark } = useDarkMode()
  const { resetGame } = useGame()

  return (
    <header className='grid place-items-center border-b-[5px] border-red-700 px-4 pb-2'>
      <h1 className='w-fit cursor-pointer' onClick={() => resetGame()}>
        {isDark && <Image src={titleDark} alt='Minesweeper++' height={70} />}
        {!isDark && <Image src={titleLight} alt='Minesweeper++' height={70} />}
      </h1>
    </header>
  )
}

export default Header
