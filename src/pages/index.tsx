import Head from 'next/head';
import Image from 'next/image';
import logo from '../../public/mpp.svg';
import { useState } from 'react';
import clsx from 'clsx';
import { PlayIcon } from '@components/icon';
import { getInitialMap, isFinished, openZeroGrid } from '@libs/tools';
import { Cell } from '@components/board';
import { FaBomb } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import useDarkMode from '@libs/useDarkMode';
import { useStopwatch } from 'react-timer-hook';

const grid = {
  none: {
    width: 0,
    height: 0,
    mines: 0,
  },
  easy: {
    width: 9,
    height: 9,
    mines: 10,
  },
  normal: {
    width: 16,
    height: 16,
    mines: 40,
  },
  hard: {
    width: 16,
    height: 30,
    mines: 99,
  },
};

export type SceneType = 'start' | 'desc' | 'select' | 'play' | 'win' | 'lose';
export type ModeType = 'none' | 'easy' | 'normal' | 'hard';
export type CellType = 'CLOSED' | 'OPEN' | 'FLAG';
export type CellState = [CellType, boolean, number, number];
export type BoardType = [CellType, boolean, number, number][];

export default function Home() {
  const { isDark, toggleDark } = useDarkMode();
  const [mode, setMode] = useState<ModeType>('none');
  const [scene, setScene] = useState<SceneType>('start');
  const [board, setBoard] = useState<BoardType>([]);
  const gridCount = board.map((v) => v[0] === 'CLOSED').filter((v) => v).length;
  const mineCount = grid[mode].mines - board.map((v) => v[0] === 'FLAG').filter((v) => v).length;
  const { seconds, minutes, hours, start, pause } = useStopwatch({});

  const handleAction = (type: CellType, index: number) => {
    if (type === 'OPEN' && board[index][1]) setScene('lose');
    else {
      const newBoard: BoardType = board.map((_, i) =>
        i === index ? [type, board[i][1], board[i][2], board[i][3]] : board[i]
      );
      setBoard(
        type === 'OPEN'
          ? openZeroGrid(newBoard, index, grid[mode].width, grid[mode].height)
          : newBoard
      );
      if (isFinished(newBoard)) {
        pause();
        setScene('win');
      }
    }
  };

  const resetGame = () => {
    setMode('none');
    setScene('start');
    setBoard([]);
  };

  return (
    <div className='min-w-max'>
      <Head>
        <title>Minesweeper++</title>
        <meta name='description' content='Minesweeper++' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-4 min-h-[90vh] flex flex-col'>
        <h1
          className='flex items-center justify-center border-b-[5px] border-red-700 pb-2 cursor-pointer'
          onClick={() => resetGame()}
        >
          <Image src={logo} alt='minesweeper++' width={50} />
          <span className='text-4xl mx-4 tracking-wide font-bold dark:text-white'>
            Minesweeper++
          </span>
        </h1>
        <div className='flex-grow flex flex-col justify-center items-center relative my-4'>
          {/* light/dark theme */}
          {scene === 'start' && (
            <button
              onClick={() => toggleDark()}
              className={clsx(
                'absolute right-4 top-0 border-[3px] rounded border-gray-700 p-2 z-20 dark:border-white'
              )}
            >
              {isDark && <MdDarkMode color='white' size={40} />}
              {!isDark && <MdOutlineLightMode color='black' size={40} />}
            </button>
          )}
          {/* start scene */}
          <div
            className={clsx(
              'grid place-items-center gap-y-8 transition-all duration-300 ease-in-out w-fit',
              scene === 'start' && 'z-10 opacity-100',
              scene !== 'start' && 'opacity-0 absolute z-0'
            )}
          >
            <button onClick={() => setScene('desc')}>
              <PlayIcon className='w-[200px] h-[200px]' />
            </button>
            <a
              className='border-4 rounded p-4 text-xl text-blue-500 border-blue-500 dark:text-blue-300 dark:border-blue-300'
              href='https://forms.gle/k4sbBw6YyqHXzeYi9'
              target='_blank'
              rel='noopener noreferrer'
            >
              ゲーム改善のためアンケートにお答えください
            </a>
          </div>
          {/* disc scene */}
          <div
            className={clsx(
              'grid place-items-center gap-y-8 transition-all duration-300 ease-in-out w-fit',
              scene === 'desc' && 'z-10 opacity-100',
              scene !== 'desc' && 'opacity-0 absolute z-0'
            )}
          >
            <div className='border-[3px] border-gray-700 p-4 rounded max-w-[450px] tracking-wide dark:text-white dark:border-white'>
              <p className='mb-6'>このマインスイーパーの決着は神が握っている</p>
              <p className='mb-1'>なぜまわりの地雷の数が正確にわかるのだろう？</p>
              <p className='mb-1'>見つけた地雷の数が実際の半分・・・なんてときもあるだろう</p>
              <p className='mb-6'>そんな不確定要素を掛け合わせたゲーム</p>
              <p className='mb-1'>タイルを開けたときに表示される数字は、周りの地雷の数が</p>
              <p className='mb-1'>
                <span className='font-bold mx-1 text-red-500'>少なくともその数だけある</span>
                という印
              </p>
              <p className='mb-1'>さすがに数字が1のときは周りには地雷が必ず1個しかないが、</p>
              <p className='mb-6'>それ以上では．．．</p>
              <p className='mb-6'>
                極限まで頭をひねらせ、タイルとにらめっこし、最後には神頼みまでしてこのほぼクリア不可能なゲームのクリア画面を見てほしい
              </p>
              <div className='grid justify-center p-2'>
                <button
                  className={clsx(
                    'py-4 text-center text-xl font-semibold transition-all duration-200 ease-in w-[240px]',
                    'bg-purple-500 text-white'
                  )}
                  onClick={() => setScene('select')}
                >
                  難易度を選択する
                </button>
              </div>
            </div>
          </div>
          {/* select scene */}
          <div
            className={clsx(
              'transition-all duration-300 ease-in-out',
              scene === 'select' && 'opacity-100 z-10',
              scene !== 'select' && 'opacity-0 absolute z-0'
            )}
          >
            <div className='text-3xl font-semibold text-gray-800 text-center p-8 dark:text-white'>
              難易度を選択してください
            </div>
            <div className='grid gap-4 justify-center items-center text-xl text-center p-4'>
              <div
                className={clsx(
                  'px-20 py-4 text-white font-semibold bg-blue-500 hover:bg-green-400 transition-all duration-200 ease-in max-w-[240px]',
                  mode === 'easy' && 'bg-green-400 hover:bg-none'
                )}
                role='button'
                onClick={() => setMode('easy')}
              >
                簡単
              </div>
              <div
                className={clsx(
                  'px-20 py-4 text-white font-semibold bg-blue-500 hover:bg-yellow-400 transition-all duration-200 ease-in w-[240px]',
                  mode === 'normal' && 'bg-yellow-400 hover:bg-none'
                )}
                role='button'
                onClick={() => setMode('normal')}
              >
                普通
              </div>
              <div
                className={clsx(
                  'py-4 text-white font-semibold bg-blue-500 hover:bg-rose-400 transition-all duration-200 ease-in w-[240px]',
                  mode === 'hard' && 'bg-rose-400 hover:bg-none'
                )}
                role='button'
                onClick={() => setMode('hard')}
              >
                難しい
              </div>
            </div>
            <div className='grid justify-center p-4'>
              <button
                className={clsx(
                  'py-4 text-center text-xl font-semibold transition-all duration-200 ease-in w-[240px]',
                  mode === 'none' ? 'bg-gray-400 text-gray-300' : 'bg-purple-500 text-white'
                )}
                disabled={mode === 'none'}
                onClick={() => {
                  setBoard(getInitialMap(grid[mode].width, grid[mode].height, grid[mode].mines));
                  setScene('play');
                  start();
                }}
              >
                ゲームスタート
              </button>
            </div>
          </div>
          {/* play scene */}
          <div
            className={clsx(
              'relative transition-all w-fit duration-300 ease-in-out mx-16',
              scene === 'play' && 'opacity-100 z-10',
              scene !== 'play' && 'opacity-0 absolute z-0 h-0'
            )}
          >
            <div className='border-[3px] rounded border-gray-700 mb-4 p-4 flex justify-between text-xl dark:text-white'>
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
                残りマス数:<span className='ml-1'>{gridCount}</span>
              </div>
            </div>
            <div className='relative grid gap-1 place-items-center bg-gray-700 p-4'>
              {Array(grid[mode].height)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className={clsx(
                      'relative grid gap-1',
                      scene !== 'play' && 'opacity-0 absolute z-0',
                      mode === 'easy' && 'grid-cols-9',
                      (mode === 'normal' || mode === 'hard') && 'grid-cols-16'
                    )}
                  >
                    {scene === 'play' &&
                      Array(grid[mode].width)
                        .fill(0)
                        .map((_, j) => (
                          <Cell
                            key={j}
                            index={i * grid[mode].width + j}
                            type={board[i * grid[mode].width + j]}
                            setAction={handleAction}
                          />
                        ))}
                  </div>
                ))}
            </div>
          </div>
          {/* result scene */}
          <div
            className={clsx(
              'transition-all duration-300 ease-in-out grid gap-8',
              (scene === 'win' || scene === 'lose') && 'opacity-100 z-10',
              scene !== 'win' && scene !== 'lose' && 'opacity-0 absolute z-0'
            )}
          >
            {scene === 'win' && (
              <div className='text-center'>
                <div className='text-lime-600 font-bold text-8xl my-12 dark:text-lime-500'>
                  You Win!
                </div>
                <div className='dark:text-white'>
                  素晴らしい！！神は君に微笑んだらしい。この調子で続けたまえ。
                </div>
              </div>
            )}
            {scene === 'lose' && (
              <div className='text-center'>
                <div className='text-red-700 font-bold text-8xl my-12 dark:text-red-600'>
                  You Lose!
                </div>
                <div className='dark:text-white'>
                  やはりクリアは無理か．．．気が向いたら再び挑戦するといい。
                </div>
              </div>
            )}
            <button
              className='text-center p-4 bg-blue-500 text-white font-bold text-xl'
              onClick={resetGame}
            >
              もう一度遊ぶ
            </button>
          </div>
        </div>
      </main>

      <footer className='p-2 w-full text-center flex justify-center space-x-4 dark:text-white'>
        <a
          href='https://github.com/kage1020'
          target='_blank'
          rel='noopener noreferrer'
          className='p-2'
        >
          &copy; kage1020
        </a>
        <a
          href='https://forms.gle/k4sbBw6YyqHXzeYi9'
          target='_blank'
          rel='noopener noreferrer'
          className='p-2'
        >
          フィードバック
        </a>
      </footer>
    </div>
  );
}
