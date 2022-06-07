import clsx from 'clsx'
import { animationClasses } from 'constants/constants'
import { Children } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { SearchResultResponse } from '../@types/searchResultResponse'

export const SearchResultTable: React.FC<{
  handleCloseButtonClicked: () => void
}> = ({ children, handleCloseButtonClicked }) => {
  return (
    <div className='rounded-lg flex flex-col justify-center items-center lg:w-1/3  md:w-1/2 w-full mx-5 py-5 space-y-3 relative'>
      {Children.count(children) === 0 || (
        <button
          className={clsx(
            'absolute right-0 top-0',
            'text-neutral-800 hover:text-neutral-700 dark:text-stone-300 dark:hover:text-stone-400',
            'hover:scale-105 outline-none',
            animationClasses
          )}
          onClick={handleCloseButtonClicked}
        >
          <AiOutlineClose className='text-xl' />
        </button>
      )}
      {children}
    </div>
  )
}

const SearchResult: React.FC<{
  result: SearchResultResponse
}> = ({ result }) => {
  return (
    <a
      href={`http://localhost:8080/download/${result.title}`}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'w-full ',
        'flex gap-3 items-center p-3 ',
        'bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 ',
        'text-neutral-900 dark:text-stone-300',
        'rounded-md border-2 border-stone-300 dark:border-0 shadow-sm font-semibold',
        'hover:cursor-pointer hover:shadow-lg hover:z-10 hover:translate-x-1 ',
        animationClasses
      )}
    >
      <div className='flex  w-full items-end'>
        <h3 className='truncate font-semibold'>{result.title}</h3>
        {result.relevanceIndex && (
          <span className='grow text-right text-xs h-fit'>
            {result.relevanceIndex.toFixed(2)}
          </span>
        )}
        {/* <p className='truncate font-medium pl-2 text-sm'>{result.preview}</p> */}
      </div>
    </a>
  )
}

export default SearchResult
