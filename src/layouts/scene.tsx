import type { ReactNode } from 'react'

import clsx from 'clsx'

import useGame from '@libs/useGame'

import type { SceneType } from '@types'

const SceneLayout = ({
  className,
  scene,
  children,
}: {
  className?: string
  scene: SceneType
  children: ReactNode
}) => {
  const { scene: nowScene } = useGame()
  return (
    <div
      className={clsx(
        'relative grid place-items-center py-4',
        scene !== nowScene && 'hidden animate-hide',
        scene === nowScene && 'block animate-show',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default SceneLayout
