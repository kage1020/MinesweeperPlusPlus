export type SceneType = 'start' | 'desc' | 'select' | 'play' | 'win' | 'lose'

export type ModeType = 'none' | 'easy' | 'normal' | 'hard'

export type CellType = 'CLOSED' | 'OPEN' | 'FLAG'
export type MineExist = boolean
export type FindRate = number
export type MineCount = number
export type CellState = [CellType, MineExist, FindRate, MineCount]
export type BoardState = CellState[]
