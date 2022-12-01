import type { ReactNode } from 'react'

import clsx from 'clsx'

const Button = ({
  className = '',
  disabled = false,
  onClick,
  children,
}: {
  className?: string
  disabled?: boolean
  onClick: () => void
  children?: ReactNode
}) => {
  return (
    <button
      type='button'
      className={clsx(
        'w-[20vw] min-w-[200px] p-4 text-center text-xl font-semibold transition-all duration-200 ease-in',
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
