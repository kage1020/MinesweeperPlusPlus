import { BoardType } from '@pages';

export const getInitialMap = (width: number, height: number, mines: number): BoardType => {
  const mineMap = getRandomMines(width * height, mines);
  const findMap = getFindMap(width * height);
  const countMap = getMineCountMap(mineMap, width, height);
  return Array(width * height)
    .fill(0)
    .map((_, i) => ['CLOSED', mineMap[i], findMap[i], countMap[i]]);
};

export const getRandomMines = (count: number, mines: number) => {
  const map = Array(count)
    .fill(0)
    .map((_, i) => i)
    .sort(() => Math.random() - 0.5)
    .slice(0, mines);
  return Array(count)
    .fill(0)
    .map((v, i) => map.includes(i));
};

export const getFindMap = (count: number) => {
  return Array(count)
    .fill(0)
    .map((_) => Math.random() / 2 + 0.5);
};

export const getMineCountMap = (map: boolean[], width: number, height: number) => {
  return map.map(
    (v, i) =>
      Number(!!map[i % width === 0 ? -1 : i - width - 1]) +
      Number(!!map[i - width]) +
      Number(!!map[i % width === width - 1 ? -1 : i - width + 1]) +
      Number(!!map[i % width === 0 ? -1 : i - 1]) +
      Number(!!map[i % width === width - 1 ? -1 : i + 1]) +
      Number(!!map[i % width === 0 ? -1 : i + width - 1]) +
      Number(!!map[i + width]) +
      Number(!!map[i % width === width - 1 ? -1 : i + width + 1])
  );
};

export const isFinished = (map: BoardType) => {
  const flagCount = map.map((v) => v[0] === 'FLAG' && v[1]).filter((v) => v).length;
  const openCount = map.map((v) => v[0] === 'OPEN').filter((v) => v).length;
  const mineCount = map.map((v) => v[1]).filter((v) => v).length;

  return flagCount === mineCount || mineCount + openCount === map.length;
};
