import { useContext } from 'react'

import Button from '@components/Button'
import SceneLayout from '@layouts/scene'
import useGame from '@libs/useGame'
import { TimeContext } from '@pages'

const LoseScene = () => {
  const { hours, minutes, seconds } = useContext(TimeContext)
  const { score, highScore, switchNextScene } = useGame()
  return (
    <SceneLayout scene='lose' className='grid place-items-center gap-8'>
      <div className='text-center'>
        <div className='my-12 text-8xl font-bold text-red-700 dark:text-red-600'>You Lose!</div>
        <div className='dark:text-white'>
          やはりクリアは無理か．．．気が向いたら再び挑戦するといい。
        </div>
      </div>
      <div className='grid w-full flex-wrap justify-around rounded border-[3px] border-gray-700 p-4 text-center dark:border-white dark:text-white md:flex'>
        <div>
          <span className='mr-2'>プレイ時間：</span>
          {hours !== 0 && <span>{hours}:</span>}
          <span>
            {`0${minutes}`.slice(-2)}:{`0${seconds}`.slice(-2)}
          </span>
        </div>
        <div>
          <span className='mr-2'>スコア：</span>
          {score}
        </div>
        <div>
          <span className='mr-2'>ハイスコア：</span>
          {highScore}
        </div>
      </div>
      <Button className='bg-blue-500 text-white' onClick={() => switchNextScene()}>
        もう一度遊ぶ
      </Button>
    </SceneLayout>
  )
}

export default LoseScene
