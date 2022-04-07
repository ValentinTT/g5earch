import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

interface SearchBarProps {
  isFocus: boolean
  setFocus: (newState: boolean) => void
  handleSearchButtonClicked: (textToSearch: string) => void
}

const SearchBar = ({
  isFocus,
  setFocus,
  handleSearchButtonClicked,
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState('')
  const inputElement = useRef<any>()
  const animationClasses = 'transition-all ease-in-out'

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }, [isFocus])

  return (
    <div>
      <div className='flex w-auto'>
        <div className='relative flex justify-center items-center'>
          <input
            type='text'
            placeholder='Buscar'
            className={clsx(
              'h-10',
              'm-0 grow',
              'ring-1 ring-pink-500 text-stone-600 outline-none rounded-none rounded-l-full',
              animationClasses,
              isFocus ? 'pl-3 w-80 opacity-100' : 'w-0 p-0 opacity-0'
            )}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === 'Enter') handleSearchButtonClicked(searchText)
            }}
            value={searchText}
            ref={inputElement}
          />
          <button
            className={clsx(
              'absolute right-3',
              'text-stone-300 outline-none',
              animationClasses,
              isFocus ? 'opacity-100' : 'opacity-0'
            )}
            onClick={() => {
              setFocus(false)
              setSearchText('')
            }}
          >
            <AiOutlineClose className='text-xl' />
          </button>
        </div>
        <button
          className={clsx(
            'w-10 h-10',
            'flex justify-center items-center',
            'bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 ring-red-500 text-white',
            animationClasses,
            isFocus
              ? 'rounded-r-full ring-1'
              : 'rounded-full translate-x-12 hover:scale-105 hover:shadow-lg'
          )}
          onClick={() => handleSearchButtonClicked(searchText)}
        >
          <AiOutlineSearch className='text-2xl' />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
