import { useState } from 'react'
import clsx from 'clsx'
import { createServer } from 'miragejs'
import { ThemeButton } from 'components/ThemeButton'
import Title from 'components/Title'
import SearchBar from 'components/SearchBar'
import LoadingSpinner from 'components/LoadingSpinner'
import { SearchResultResponse } from './@types/searchResultResponse'
import SearchResult, { SearchResultTable } from 'components/SearchResult'

let server = createServer({})
server.get('/api/buscar/:text', (schema, req): SearchResultResponse[] => {
  console.log(req)
  return Array.from({ length: Math.floor(Math.random() * 7 + 1) }, () => ({
    link: 'https://www.anderson1.org/site/handlers/filedownload.ashx?moduleinstanceid=24440&dataid=44258&FileName=hobbit.pdf',
    title: 'The Hobbit',
    preview:
      'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. ',
  }))
})

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isFocus, setFocus] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResultResponse[]>(
    Array.from({ length: Math.floor(5) }, () => ({
      link: 'https://www.anderson1.org/site/handlers/filedownload.ashx?moduleinstanceid=24440&dataid=44258&FileName=hobbit.pdf',
      title: 'The Hobbit',
      preview:
        'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. ',
    }))
  )

  const handleButtonClicked = (searchText: string) => {
    if (!isFocus) return setFocus(true)
    setIsLoading((_) => {
      fetch('/api/buscar/' + encodeURIComponent(searchText))
        .then((res) => res.json())
        .then((json) => {
          setSearchResults(json)
          setIsLoading(false)
        })
      return true
    })
  }

  return (
    <div
      className={clsx(
        'p-10 md:m-0 md:p-0 py-10',
        'min-h-screen w-screen',
        'flex flex-col justify-center items-center space-y-5',
        'bg-[#FAFAFA] dark:bg-[#111827]'
      )}
    >
      <ThemeButton />
      <div className='flex flex-col justify-center items-center '>
        <Title isFocus={isFocus}>G5earch!</Title>
        <SearchBar
          isFocus={isFocus}
          setFocus={setFocus}
          handleSearchButtonClicked={handleButtonClicked}
        />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SearchResultTable>
          {searchResults?.map((result, index) => (
            <SearchResult result={result} index={index} />
          ))}
        </SearchResultTable>
      )}
    </div>
  )
}
