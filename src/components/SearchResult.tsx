import clsx from 'clsx'
import { ReactNode } from 'react'
import { SearchResultResponse } from '../@types/searchResultResponse'

export function SearchResultTable({ children }: { children: ReactNode }) {
  return (
    <div className='rounded-lg flex flex-col justify-center items-center lg:w-1/3  md:w-1/2 w-full mx-5 space-y-3'>
      {children}
    </div>
  )
}

export default function SearchResult({
  result,
  index,
}: {
  result: SearchResultResponse
  index: number
}) {
  return (
    <a
      href={result.link}
      target='_blank'
      rel='noreferrer'
      key={result.link + index}
      className={clsx(
        'w-full ',
        'flex gap-3 items-center p-3 ',
        'bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 ',
        'text-neutral-900 dark:text-stone-300',
        'rounded-md border-2 border-stone-300 dark:border-0 shadow-sm font-semibold',
        'hover:cursor-pointer hover:shadow-lg transition-all hover:z-10 hover:translate-x-1 '
      )}
    >
      <div className='flex flex-col w-full'>
        <h3 className='truncate font-semibold'>{result.title}</h3>
        <p className='truncate font-medium pl-2 text-sm'>{result.preview}</p>
      </div>
    </a>
  )
}
