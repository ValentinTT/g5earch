import SearchBar from 'components/SearchBar/SearchBar'
import Title from 'components/Title'
import { useEffect, useState } from 'react'
import { createServer } from 'miragejs'
import clsx from 'clsx'

interface SearchResultResponse {
  link: string
  title: string
  preview: string
}

let server = createServer({})
server.get('/api/buscar/:text', (schema, req): SearchResultResponse[] => {
  console.log(req)
  return Array.from({ length: Math.floor(Math.random() * 3 + 1) }, () => ({
    link: 'https://www.anderson1.org/site/handlers/filedownload.ashx?moduleinstanceid=24440&dataid=44258&FileName=hobbit.pdf',
    title: 'The Hobbit',
    preview:
      'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. ',
  }))
})

export default function App() {
  const [isFocus, setFocus] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResultResponse[]>(
    Array.from({ length: Math.floor(Math.random() * 3 + 1) }, () => ({
      link: 'https://www.anderson1.org/site/handlers/filedownload.ashx?moduleinstanceid=24440&dataid=44258&FileName=hobbit.pdf',
      title: 'The Hobbit',
      preview:
        'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. ',
    }))
  )

  const handleButtonClicked = (searchText: string) => {
    if (!isFocus) return setFocus(true)
    fetch('/api/buscar/' + encodeURIComponent(searchText))
      .then((res) => res.json())
      .then((json) => {
        setSearchResults(json)
      })
  }
  const bg = 'bg-gradient-to-t from-gray-400 to-gray-100 bg-gradient-to-r'
  return (
    <div
      className={`w-screen h-screen flex flex-col justify-center items-center space-y-5 ${bg}`}
    >
      <div className='flex flex-col justify-center items-center '>
        <Title isFocus={isFocus}>G5earch!</Title>
        <SearchBar
          isFocus={isFocus}
          setFocus={setFocus}
          handleSearchButtonClicked={handleButtonClicked}
        />
      </div>
      <div className='rounded-lg flex flex-col justify-center items-center lg:w-1/3  md:w-1/2 w-full mx-5 space-y-3'>
        {searchResults?.map((result, index) => (
          <a
            href={result.link}
            target='_blank'
            key={result.link + index}
            className={clsx(
              'w-full bg-white odd:bg-white flex gap-3 items-center font-semibold text-neutral-900 p-3 hover:bg-neutral-50 rounded-md hover:cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:z-10'
            )}
          >
            <div className='flex flex-col w-full'>
              <h3 className='truncate font-semibold'>{result.title}</h3>
              <p className='truncate font-medium pl-2 text-sm'>
                {result.preview}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
