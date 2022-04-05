import { useState } from 'react'
import { SearchIcon, CrossIcon } from './Icons'

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

  return (
    <div>
      <div className='flex w-auto'>
        <div className='relative flex justify-center items-center'>
          <input
            type='text'
            placeholder='Buscar'
            className={`outline-1 outline-none ring-1 ring-indigo-600 m-0 h-10 rounded-none rounded-l-full grow text-stone-600 transition-all duration-300 ease-in-out ${
              isFocus ? 'pl-3 w-80 opacity-100' : 'w-0 p-0 opacity-0'
            }`}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className={`absolute right-3 text-stone-300 transition-all duration-300 ease-in-out ${
              isFocus ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setFocus(false)}
          >
            <CrossIcon />
          </button>
        </div>
        <button
          className={`w-10 h-10 bg-indigo-600 ring-indigo-600 text-white flex justify-center items-center  transition-all duration-300 ease-in-out  ${
            isFocus ? 'rounded-r-full' : 'rounded-full'
          }`}
          onClick={() => handleSearchButtonClicked(searchText)}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
