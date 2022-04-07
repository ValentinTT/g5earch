import clsx from 'clsx'
import { ReactNode } from 'react'
import { SearchResultResponse } from 'types/SearchResultResponse'

export function SearchResultContainer({ children }: { children: ReactNode }) {
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
      key={result.link + index}
      className={clsx(
        'w-full bg-white flex gap-3 items-center font-semibold text-neutral-900 p-3 hover:bg-neutral-50 rounded-md hover:cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:z-10 hover:translate-x-1 border-2 border-stone-300'
      )}
    >
      <div className='flex flex-col w-full'>
        <h3 className='truncate font-semibold'>{result.title}</h3>
        <p className='truncate font-medium pl-2 text-sm'>{result.preview}</p>
      </div>
    </a>
  )
}
