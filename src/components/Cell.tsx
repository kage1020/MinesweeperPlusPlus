import { useContext, useState } from 'react'

import clsx from 'clsx'
import { FaBomb } from 'react-icons/fa'
import { HiFlag, HiOutlineTrash } from 'react-icons/hi2'
import { TbShovel } from 'react-icons/tb'

import useGame from '@libs/useGame'
import useMediaQuery from '@libs/useMediaQuery'
import { TimeContext } from '@pages'

const Cell = ({ index }: { index: number }) => {
  const { hours, minutes, seconds, pause } = useContext(TimeContext)
  const { isMd } = useMediaQuery()
  const { mode, board, switchNextScene, onDig, onFlag, setTime } = useGame()
  const [selected, setSelect] = useState(false)
  const state = board[index]

  const handleDig = () => {
    const finished = onDig(index)
    setSelect(false)
    if (finished) {
      pause()
      setTime(hours, minutes, seconds)
      switchNextScene(finished)
    }
  }

  const handleFlag = () => {
    const finished = onFlag(index)
    setSelect(false)
    if (finished) {
      pause()
      setTime(hours, minutes, seconds)
      switchNextScene(finished)
    }
  }

  return (
    <div className='relative'>
      <button
        className={clsx(
          'relative block max-h-[40px] max-w-[40px]',
          isMd ? 'text-base' : mode === 'easy' ? 'text-sm' : 'text-xs',
          state[0] === 'CLOSED' &&
            !selected &&
            'bg-gray-300 hover:bg-rose-400 dark:bg-gray-700 dark:hover:bg-rose-400',
          selected && 'bg-rose-400 dark:bg-rose-400',
          state[0] === 'OPEN' && !state[1] && 'bg-green-500',
          state[0] === 'FLAG' && 'bg-yellow-300',
          state[0] === 'OPEN' && state[1] && 'bg-purple-500',
          mode === 'easy' && 'h-[8vw] w-[8vw]',
          mode !== 'easy' && 'h-[4vw] w-[4vw] text-lg sm:h-[5vw] sm:w-[5vw] md:h-[7vw] md:w-[7vw]',
        )}
        disabled={state[0] === 'OPEN'}
        onClick={() => setSelect(!selected)}
      >
        {(state[0] === 'OPEN' && !state[1] && Math.ceil(state[2] * state[3])) || ''}
        {state[0] === 'FLAG' && (
          <div className='grid place-items-center'>
            <HiFlag size={isMd ? 30 : mode === 'easy' ? 20 : 10} />
          </div>
        )}
        {state[0] === 'OPEN' && state[1] && <FaBomb size={30} />}
      </button>
      <div
        className={clsx(
          'absolute z-30 grid h-[60px] w-[60px] cursor-pointer place-items-center rounded-full bg-blue-500',
          !selected && 'top-0 right-0 left-0 hidden animate-hide',
          selected && '-top-1/4 right-[110%] block animate-show',
        )}
        onClick={handleDig}
      >
        <TbShovel size={selected ? 40 : 0} />
      </div>
      <div
        className={clsx(
          'absolute z-30 grid h-[60px] w-[60px] cursor-pointer place-items-center rounded-full bg-purple-500',
          !selected && 'top-0 left-0 hidden animate-hide',
          selected && '-top-1/4 left-[110%] block animate-show',
        )}
        onClick={handleFlag}
      >
        {state[0] === 'FLAG' && <HiOutlineTrash size={selected ? 40 : 0} />}
        {state[0] === 'CLOSED' && <HiFlag size={selected ? 40 : 0} />}
      </div>
      {selected && (
        <div className='fixed inset-0 z-20 bg-transparent' onClick={() => setSelect(false)}></div>
      )}
    </div>
  )
}

export default Cell
