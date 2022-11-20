import clsx from 'clsx';
import { useState } from 'react';
import { HiFlag, HiOutlineTrash } from 'react-icons/hi2';
import { TbShovel } from 'react-icons/tb';
import { FaBomb } from 'react-icons/fa';
import { CellType } from '@pages';

export const Cell = ({
  type,
  index,
  setAction,
}: {
  type: [CellType, boolean, number, number];
  index: number;
  setAction: (type: CellType, index: number) => void;
}) => {
  const [selected, setSelect] = useState(false);
  const onDig = () => {
    setAction('OPEN', index);
    setSelect(false);
  };
  const onFlag = () => {
    setAction(type[0] === 'FLAG' ? 'CLOSED' : 'FLAG', index);
    setSelect(false);
  };
  return (
    <div className='relative'>
      <button
        className={clsx(
          'block relative w-[40px] h-[40px]',
          type[0] === 'CLOSED' && 'bg-gray-800 hover:bg-rose-400',
          type[0] === 'OPEN' && 'bg-green-500',
          type[0] === 'FLAG' && 'bg-yellow-300',
          !selected && 'z-10',
          selected && 'z-30'
        )}
        disabled={type[0] === 'OPEN'}
        onClick={() => setSelect(type[0] !== 'OPEN' && !selected)}
      >
        {/* {type[0] === 'OPEN' && !type[1] && Math.ceil(type[2] * type[3])} */}
        {(type[0] === 'OPEN' && !type[1] && Math.ceil(type[2] * type[3])) || ''}
        {type[0] === 'FLAG' && (
          <div className='grid place-items-center'>
            <HiFlag size={30} />
          </div>
        )}
        {type[0] === 'OPEN' && type[1] && <FaBomb size={30} />}
      </button>
      <div
        className={clsx(
          'transition-all duration-100 ease-in absolute bg-blue-500 rounded-full cursor-pointer grid place-items-center',
          !selected && 'w-0 h-0 opacity-0 top-0 right-0 left-0 z-0',
          selected && 'w-[60px] h-[60px] opacity-1 -top-1/4 right-[110%] z-30'
        )}
        onClick={onDig}
      >
        <TbShovel size={selected ? 40 : 0} />
      </div>
      <div
        className={clsx(
          'transition-all duration-100 ease-in absolute bg-purple-500 rounded-full cursor-pointer grid place-items-center',
          !selected && 'w-0 h-0 opacity-0 top-0 left-0 z-0',
          selected && 'w-[60px] h-[60px] opacity-1 -top-1/4 left-[110%] z-30'
        )}
        onClick={onFlag}
      >
        {type[0] === 'FLAG' && <HiOutlineTrash size={selected ? 40 : 0} />}
        {type[0] === 'CLOSED' && <HiFlag size={selected ? 40 : 0} />}
      </div>
      {selected && (
        <div className='z-20 fixed inset-0 bg-transparent' onClick={() => setSelect(false)}></div>
      )}
    </div>
  );
};
