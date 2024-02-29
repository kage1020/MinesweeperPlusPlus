import Button from '@components/Button'
import SceneLayout from '@layouts/scene'
import useGame from '@libs/useGame'

const DescScene = () => {
  const { switchNextScene } = useGame()
  return (
    <SceneLayout scene='desc'>
      <div className='max-w-[440px] rounded border-[3px] border-gray-700 p-4 text-justify tracking-wider duration-300 dark:border-white dark:text-white md:max-w-[540px] md:text-xl'>
        <p className='mb-6'>このマインスイーパーの決着は神が握っている</p>
        <p className='mb-1'>なぜまわりの地雷の数が正確にわかるのだろう？</p>
        <p className='mb-1'>見つけた地雷の数が実際の半分・・・なんてときもあるだろう</p>
        <p className='mb-6'>そんな不確定要素を掛け合わせたゲーム</p>
        <p className='mb-1'>
          タイルを開けたときに表示される数字は、周りの地雷の数が
          <span className='mx-1 font-bold text-red-500'>少なくともその数だけある</span>
          という印
        </p>
        <p className='mb-6'>さすがに周りの地雷の数が1のときは1と表示されるが、それ以上では．．．</p>
        <p className='mb-6'>
          極限まで頭をひねらせ、タイルとにらめっこし、最後には神頼みまでしてこのほぼクリア不可能なゲームのクリア画面を見てほしい
        </p>
        <div className='grid justify-center p-2'>
          <Button className='bg-purple-500 text-white' onClick={() => switchNextScene()}>
            難易度を選択する
          </Button>
        </div>
      </div>
    </SceneLayout>
  )
}

export default DescScene
