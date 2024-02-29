import { useContext } from 'react'

import Button from '@components/Button'
import SceneLayout from '@layouts/scene'
import useGame from '@libs/useGame'
import { TimeContext } from '@pages'

const WinScene = () => {
  const { hours, minutes, seconds } = useContext(TimeContext)
  const { score, highScore, switchNextScene } = useGame()
  return (
    <SceneLayout scene='win' className='grid place-items-center gap-8'>
      <div className='text-center'>
        <div className='my-12 text-8xl font-bold text-lime-600 dark:text-lime-500'>You Win!</div>
        <div className='duration-300 dark:text-white'>
          素晴らしい！！神は君に微笑んだらしい。この調子で続けたまえ。
        </div>
      </div>
      <div className='flex w-full justify-around rounded border-[3px] border-gray-700 p-4 text-center duration-300 dark:border-white dark:text-white'>
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

export default WinScene
