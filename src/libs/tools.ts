import type { BoardState, ModeType } from '@types'

export const grid = {
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
}

export const getInitialBoard = (mode: ModeType): BoardState => {
  const mineBoard = getMineBoard(mode)
  const findBoard = getFindBoard(mode)
  const countBoard = getCountBoard(mineBoard, mode)

  return Array(grid[mode].width * grid[mode].height)
    .fill(0)
    .map((_, i) => ['CLOSED', mineBoard[i], findBoard[i], countBoard[i]])
}

const getMineBoard = (mode: ModeType) => {
  const count = grid[mode].width * grid[mode].height
  const map = Array(count)
    .fill(0)
    .map((_, i) => i)
    .sort(() => Math.random() - 0.5)
    .slice(0, grid[mode].mines)
  return Array(count)
    .fill(0)
    .map((_, i) => map.includes(i))
}

const getFindBoard = (mode: ModeType) =>
  Array(grid[mode].width * grid[mode].height)
    .fill(0)
    .map(() => Math.random() / 2 + 0.5)

const getCountBoard = (map: boolean[], mode: ModeType) => {
  const width = grid[mode].width
  return map.map(
    (v, i) =>
      Number(!!map[i % width === 0 ? -1 : i - width - 1]) +
      Number(!!map[i - width]) +
      Number(!!map[i % width === width - 1 ? -1 : i - width + 1]) +
      Number(!!map[i % width === 0 ? -1 : i - 1]) +
      Number(!!map[i % width === width - 1 ? -1 : i + 1]) +
      Number(!!map[i % width === 0 ? -1 : i + width - 1]) +
      Number(!!map[i + width]) +
      Number(!!map[i % width === width - 1 ? -1 : i + width + 1]),
  )
}

export const isFinished = (board: BoardState, mode: ModeType) => {
  const flagCount = board.filter((v) => v[0] === 'FLAG').length
  const errorFlagCount = board.filter((v) => v[0] === 'FLAG' && !v[1]).length
  const openCount = board.filter((v) => v[0] === 'OPEN').length
  const mineCount = grid[mode].mines

  return errorFlagCount == 0 && mineCount + openCount === board.length
}

export const openZeroGrid = (board: BoardState, index: number, mode: ModeType): BoardState => {
  const newBoard = board.slice()
  const width = grid[mode].width
  const height = grid[mode].height
  const queue: number[] = []
  let target = index
  const minmax = (i: number) => Math.max(-1, Math.min(i, width * height))

  do {
    if (!board[target][1]) {
      newBoard[target][0] = 'OPEN'
      if (board[target][3] === 0) {
        const candidates = [
          minmax(target - width),
          minmax(target % width === 0 ? -1 : target - 1),
          minmax(target % width === width - 1 ? -1 : target + 1),
          minmax(target + width),
        ].filter((v) => v !== -1 && v !== width * height && board[v][0] === 'CLOSED')
        queue.push(...candidates)
      }
    }
    target = queue.pop() ?? -1
  } while (target !== -1)

  return newBoard
}
