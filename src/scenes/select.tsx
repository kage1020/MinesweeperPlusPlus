import { useContext } from 'react'

import clsx from 'clsx'

import Button from '@components/Button'
import SceneLayout from '@layouts/scene'
import useGame from '@libs/useGame'
import { TimeContext } from '@pages'

const SelectScene = () => {
  const { start, reset } = useContext(TimeContext)
  const { mode, setMode, switchNextScene } = useGame()

  return (
    <SceneLayout scene='select'>
      <div className='p-4 text-center text-2xl font-semibold text-gray-800 dark:text-white'>
        難易度を選択してください
      </div>
      <div className='grid items-center justify-center gap-4 p-4 text-center text-xl'>
        <Button
          className={clsx(
            'bg-blue-500 text-white hover:bg-green-400',
            mode === 'easy' && 'bg-green-400 hover:bg-none',
          )}
          onClick={() => setMode('easy')}
        >
          簡単
        </Button>
        <Button
          className={clsx(
            'bg-blue-500 text-white hover:bg-yellow-400',
            mode === 'normal' && 'bg-yellow-400 hover:bg-none',
          )}
          onClick={() => setMode('normal')}
        >
          普通
        </Button>
        <Button
          className={clsx(
            'bg-blue-500 text-white hover:bg-rose-400',
            mode === 'hard' && 'bg-rose-400 hover:bg-none',
          )}
          onClick={() => setMode('hard')}
        >
          難しい
        </Button>
      </div>
      <div className='grid justify-center p-4'>
        <Button
          className={mode === 'none' ? 'bg-gray-400 text-gray-300' : 'bg-purple-500 text-white'}
          disabled={mode === 'none'}
          onClick={() => {
            switchNextScene()
            reset()
            start()
          }}
        >
          ゲームスタート
        </Button>
      </div>
    </SceneLayout>
  )
}

export default SelectScene
