import SearchBar from 'components/SearchBar'
import Title from 'components/Title'
import { useState } from 'react'
import { createServer } from 'miragejs'
import { SearchResultResponse } from './@types/searchResultResponse'
import SearchResult, { SearchResultContainer } from 'components/SearchResult'
import clsx from 'clsx'
import { ThemeButton } from 'components/ThemeButton'

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
  const bg = ''

  return (
    <div
      className={clsx(
        'm-0 p-0 py-10',
        'h-screen w-screen',
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
      <SearchResultContainer>
        {searchResults?.map((result, index) => (
          <SearchResult result={result} index={index} />
        ))}
      </SearchResultContainer>
    </div>
  )
}
