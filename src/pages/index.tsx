import Head from 'next/head';
import Image from 'next/image';
import logo from '../../public/mpp.svg';
import { useState } from 'react';
import clsx from 'clsx';
import { PlayIcon } from '@components/icon';
import { getInitialMap, isFinished } from '@libs/tools';
import { Cell, CellState } from '@components/board';

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

type ModeType = 'none' | 'easy' | 'normal' | 'hard';
export type BoardType = [CellState, boolean, number, number][];

export default function Home() {
  const [mode, setMode] = useState<ModeType>('none');
  const [scene, setScene] = useState<'start' | 'select' | 'play' | 'win' | 'lose'>('start');
  const [board, setBoard] = useState<BoardType>([]);

  const handleAction = (state: CellState, index: number) => {
    if (state === 'OPEN' && board[index][1]) setScene('lose');
    else {
      const newBoard = board.map((_, i) =>
        i === index ? [state, board[i][1], board[i][2], board[i][3]] : board[i]
      );
      setBoard(newBoard as BoardType);
      if (isFinished(newBoard as BoardType)) setScene('win');
    }
  };

  const resetGame = () => {
    setMode('none');
    setScene('start');
    setBoard([]);
  };

  return (
    <>
      <Head>
        <title>Minesweeper++</title>
        <meta name='description' content='Minesweeper++' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-4 min-w-[640px] w-screen h-screen flex flex-col'>
        <h1
          className='flex items-center justify-center border-b-[5px] border-red-700 pb-2 cursor-pointer'
          onClick={() => resetGame()}
        >
          <Image src={logo} alt='minesweeper++' width={50} />
          <span className='text-4xl mx-4 tracking-wide font-bold'>Minesweeper++</span>
        </h1>
        <div className='flex-grow flex flex-col justify-center items-center relative'>
          {/* start scene */}
          <div
            className={clsx(
              'grid place-items-center gap-y-8 transition-all duration-300 ease-in-out w-fit z-10',
              scene !== 'start' && 'opacity-0 absolute z-0'
            )}
          >
            <button onClick={() => setScene('select')}>
              <PlayIcon className='w-[300px] h-[300px]' />
            </button>
            <a
              className='border-4 rounded p-4 text-xl text-blue-500 border-blue-500'
              href='https://forms.gle/k4sbBw6YyqHXzeYi9'
              target='_blank'
              rel='noopener noreferrer'
            >
              ゲーム改善のためアンケートにお答えください
            </a>
          </div>
          {/* select scene */}
          <div
            className={clsx(
              'transition-all duration-300 ease-in-out z-10',
              scene !== 'select' && 'opacity-0 absolute z-0'
            )}
          >
            <div className='text-3xl font-semibold text-gray-800 text-center p-8'>
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
                  'py-4 text-center text-xl text-white font-semibold transition-all duration-200 ease-in w-[240px]',
                  mode === 'none' ? 'bg-gray-500' : 'bg-purple-500'
                )}
                disabled={mode === 'none'}
                onClick={() => {
                  setScene('play');
                  setBoard(getInitialMap(grid[mode].width, grid[mode].height, grid[mode].mines));
                }}
              >
                ゲームスタート
              </button>
            </div>
          </div>
          {/* play scene */}
          <div
            className={clsx(
              'relative grid gap-1 place-items-center transition-all w-fit duration-300 ease-in-out z-10 bg-gray-700 p-4 mx-8',
              scene !== 'play' && 'opacity-0 absolute z-0 h-0'
            )}
          >
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
                          state={board[i * grid[mode].width + j]}
                          setAction={handleAction}
                        />
                      ))}
                </div>
              ))}
          </div>
        </div>
      </main>

      <footer className='p-4 w-full text-center flex justify-center space-x-4'>
        <a
          href='https://codepen.io/ohheckitsbeck/pen/gXoXjP'
          target='_blank'
          rel='noopener noreferrer'
        >
          &copy; kage1020
        </a>
        <a href='https://forms.gle/k4sbBw6YyqHXzeYi9' target='_blank' rel='noopener noreferrer'>
          フィードバック
        </a>
      </footer>
    </>
  );
}
