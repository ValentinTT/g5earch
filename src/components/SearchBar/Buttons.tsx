import clsx from 'clsx'
import { animationClasses, gradient } from '../../constants/constants'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

interface SearchButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isFocus: boolean
}
export const SearchButton: React.FC<SearchButtonProps> = ({
  isFocus,
  ...butonProps
}) => {
  return (
    <button
      className={clsx(
        'w-10 h-10',
        'flex justify-center items-center',
        'text-white',
        gradient,
        animationClasses,
        isFocus
          ? 'rounded-r-full ring-1'
          : 'rounded-full translate-x-12 hover:scale-105 hover:shadow-lg'
      )}
      {...butonProps}
    >
      <AiOutlineSearch className='text-2xl' />
    </button>
  )
}

interface CloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isFocus: boolean
}
export const CloseButton: React.FC<CloseButtonProps> = ({
  isFocus,
  ...buttonProps
}) => {
  return (
    <button
      className={clsx(
        'absolute right-3',
        'text-stone-300 outline-none',
        animationClasses,
        isFocus ? 'opacity-100' : 'opacity-0'
      )}
      {...buttonProps}
    >
      <AiOutlineClose className='text-xl' />
    </button>
  )
}
