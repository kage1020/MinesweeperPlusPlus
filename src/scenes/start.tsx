import { PlayIcon } from '@components/Icon'
import ThemeSwitch from '@components/ThemeSwitch'
import SceneLayout from '@layouts/scene'
import useGame from '@libs/useGame'

const StartScene = () => {
  const { scene, switchNextScene } = useGame()
  return (
    <>
      {scene === 'start' && <ThemeSwitch />}
      <SceneLayout className='gap-y-8' scene='start'>
        <button onClick={() => switchNextScene()}>
          <PlayIcon />
        </button>
        <a
          className='rounded border-4 border-blue-500 p-4 text-xl text-blue-500 dark:border-blue-300 dark:text-blue-300'
          href='https://docs.google.com/forms/d/e/1FAIpQLSc_t3XtTd7dpoIcgaWoMOemFguE_BGj2px5sQ77ww0HkhKqYg/viewform?usp=pp_url&entry.1199509574=%E7%89%B9%E3%81%AB%E3%81%AA%E3%81%97'
          target='_blank'
          rel='noopener noreferrer'
        >
          ゲーム改善のためアンケートにお答えください
        </a>
      </SceneLayout>
    </>
  )
}

export default StartScene
