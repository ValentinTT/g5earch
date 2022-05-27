import clsx from 'clsx'
import { animationClasses } from 'constants/constants'
import React, { useEffect, useRef, useState } from 'react'
import { CloseButton, SearchButton } from './Buttons'

interface SearchBarProps {
  isFocus: boolean
  setFocus: (newState: boolean) => void
  handleSearchButtonClicked: (textToSearch: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  isFocus,
  setFocus,
  handleSearchButtonClicked,
}) => {
  const [searchText, setSearchText] = useState('')
  const inputElement = useRef<any>()

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }, [isFocus])

  return (
    <>
      <div className='flex w-auto z-0'>
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
          <CloseButton
            isFocus={isFocus}
            onClick={() => {
              setFocus(false)
              setSearchText('')
            }}
          />
        </div>
        <SearchButton
          isFocus={isFocus}
          onClick={() => handleSearchButtonClicked(searchText)}
        />
      </div>
    </>
  )
}

export default SearchBar
