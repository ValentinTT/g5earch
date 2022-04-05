import { useState } from 'react'
import { SearchIcon, CrossIcon } from './SearchIcon'

const SearchBar = () => {
  const [isFocus, setFocus] = useState(false)
  const [searchText, setSearchText] = useState('')

  const handleButtonClicked = () => {
    if (!isFocus) return setFocus(true)
    console.log(`Tenemos que buscar: ${searchText}`)
  }

  return (
    <div>
      <div className='flex w-auto'>
        <div className='relative flex justify-center items-center'>
          <input
            type='text'
            placeholder='Buscar'
            className={`outline-1 outline-none ring-1 ring-emerald-400 m-0 h-10 rounded-none rounded-l-full grow text-stone-600 transition-all duration-300 ease-in-out ${
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
          className={`w-10 h-10 bg-emerald-400 ring-emerald-400 text-white flex justify-center items-center  transition-all duration-300 ease-in-out  ${
            isFocus ? 'rounded-r-full' : 'rounded-full'
          }`}
          onClick={() => handleButtonClicked()}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
