import { useCallback } from 'react'

import useSWR from 'swr'

import { getInitialBoard, isFinished, openZeroGrid } from '@libs/tools'

import type { ModeType, SceneType } from '@types'

const useGame = () => {
  const { data: scene, mutate: mutateScene } = useSWR<SceneType>('scene', null, {
    fallbackData: 'start',
  })
  const { data: mode, mutate: mutateMode } = useSWR<ModeType>('mode', null, {
    fallbackData: 'none',
  })
  const { data: board, mutate: mutateBoard } = useSWR('board', null, {
    fallbackData: getInitialBoard(mode ?? 'none'),
  })
  const { data: time, mutate: mutateTime } = useSWR('time', null, {
    fallbackData: { hours: 0, minutes: 0, seconds: 0 },
  })
  const { data: score, mutate: mutateScore } = useSWR('score', null, { fallbackData: 0 })
  const { data: highScore, mutate: mutateHighScore } = useSWR('highScore', null, {
    fallbackData: 0,
  })

  const resetGame = useCallback(() => {
    mutateScene('start')
    mutateMode('none')
    mutateBoard(getInitialBoard('none'))
    mutateTime({ hours: 0, minutes: 0, seconds: 0 })
    mutateScore(0)
  }, [mutateBoard, mutateMode, mutateScene, mutateScore, mutateTime])
  const switchNextScene = useCallback(
    (result: 'lose' | 'win' = 'lose') => {
      if (scene && typeof score !== 'undefined') {
        if (scene === 'start') mutateScene('desc')
        else if (scene === 'desc') mutateScene('select')
        else if (scene === 'select' && mode) {
          mutateBoard(getInitialBoard(mode))
          mutateScene('play')
        } else if (scene === 'play') {
          const s = JSON.parse(localStorage.getItem('score') ?? '0') as number
          mutateScore(score + (result === 'win' ? 1000 : 0))
          if (score > s) {
            localStorage.setItem('score', JSON.stringify(score))
            mutateHighScore(score)
          }
          mutateScene(result)
        } else if (scene === 'lose' || scene === 'win') {
          resetGame()
          mutateScene('start')
        }
      }
    },
    [mode, mutateBoard, mutateHighScore, mutateScene, mutateScore, resetGame, scene, score],
  )
  const setMode = useCallback(
    (mode: ModeType) => {
      mutateMode(mode)
    },
    [mutateMode],
  )
  const onFlag = useCallback(
    (index: number) => {
      if (board && mode) {
        mutateBoard(
          board.map((v, i) =>
            i === index ? [v[0] === 'CLOSED' ? 'FLAG' : 'CLOSED', v[1], v[2], v[3]] : v,
          ),
        )
        if (isFinished(board, mode)) return 'win'
      }
      return ''
    },
    [board, mode, mutateBoard],
  )
  const onDig = useCallback(
    (index: number) => {
      if (board && mode && typeof score !== 'undefined') {
        if (board[index][1]) return 'lose'
        mutateBoard(openZeroGrid(board, index, mode))
        mutateScore(score + 10 * board[index][3])
        if (isFinished(board, mode)) return 'win'
      }
      return ''
    },
    [board, mode, mutateBoard, mutateScore, score],
  )
  const setTime = useCallback(
    (hours: number, minutes: number, seconds: number) => {
      mutateTime({ hours, minutes, seconds })
    },
    [mutateTime],
  )

  return {
    scene: scene ?? 'start',
    mode: mode ?? 'none',
    board: board ?? [],
    time,
    score,
    highScore,
    switchNextScene,
    setMode,
    resetGame,
    onFlag,
    onDig,
    setTime,
  }
}

export default useGame
