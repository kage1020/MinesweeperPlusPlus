import { useContext } from 'react'

import clsx from 'clsx'
import { FaBomb } from 'react-icons/fa'

import Cell from '@components/Cell'
import SceneLayout from '@layouts/scene'
import { grid } from '@libs/tools'
import useGame from '@libs/useGame'
import { TimeContext } from '@pages'

const PlayScene = () => {
  const { mode, scene, board } = useGame()
  const mineCount = grid[mode].mines - board.map((v) => v[0] === 'FLAG').filter((v) => v).length
  const { hours, minutes, seconds } = useContext(TimeContext)

  return (
    <SceneLayout scene='play'>
      <div className='mb-4 flex w-full justify-between rounded border-[3px] border-gray-900 bg-gray-100 p-4 text-sm duration-300 dark:border-gray-100 dark:bg-gray-800 dark:text-white sm:text-base md:text-xl'>
        <div className='flex items-center'>
          残り
          <FaBomb className='mx-1' />
          数:<span className='ml-1'>{mineCount}</span>
        </div>
        <div>
          {hours !== 0 && <span>{hours}:</span>}
          <span>
            {`0${minutes}`.slice(-2)}:{`0${seconds}`.slice(-2)}
          </span>
        </div>
        <div>
          残りマス数:
          <span className='ml-1'>
            {grid[mode].width * grid[mode].height -
              board.filter((v) => v[0] === 'FLAG' || v[0] === 'OPEN').length}
          </span>
        </div>
      </div>
      <div className='relative grid place-items-center gap-1 rounded border-[3px] border-gray-900 bg-gray-100 p-4 duration-300 dark:border-gray-100 dark:bg-gray-800'>
        {scene === 'play' &&
          Array(grid[mode].height)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={clsx(
                  'relative grid gap-1',
                  mode === 'easy' && 'grid-cols-9',
                  (mode === 'normal' || mode === 'hard') && 'grid-cols-16',
                )}
              >
                {Array(grid[mode].width)
                  .fill(0)
                  .map((__, j) => (
                    <Cell key={j} index={i * grid[mode].width + j} />
                  ))}
              </div>
            ))}
      </div>
    </SceneLayout>
  )
}

export default PlayScene
