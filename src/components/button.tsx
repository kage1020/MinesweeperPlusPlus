import clsx from 'clsx';
import { ReactNode } from 'react';

const Button = ({
  className = '',
  disabled = false,
  onClick,
  children,
}: {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      className={clsx(
        'font-semibold text-xl transition-all duration-200 ease-in w-[270px] text-center p-4',
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
