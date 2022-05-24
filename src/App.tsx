import { useState } from 'react'
import clsx from 'clsx'
import { ThemeButton } from 'components/ThemeButton'
import Title from 'components/Title'
import SearchBar from 'components/SearchBar'
import LoadingSpinner from 'components/LoadingSpinner'
import { SearchResultResponse } from './@types/searchResultResponse'
import SearchResult, { SearchResultTable } from 'components/SearchResult'
import UploadModal from 'components/UploadModal/UploadModal'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isFocus, setFocus] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResultResponse[]>()

  const handleButtonClicked = (searchText: string) => {
    if (!isFocus) return setFocus(true)
    if (searchText === '') return
    setIsLoading((_) => {
      fetch('/buscar?text=' + encodeURIComponent(searchText))
        .then((res) => res.json())
        .then((json: { response: SearchResultResponse[] }) => {
          setSearchResults(json.response)
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
        'flex flex-col justify-center items-center',
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
        <SearchResultTable
          handleCloseButtonClicked={() => setSearchResults([])}
        >
          {searchResults?.map((result, index) => (
            <SearchResult result={result} key={result.link + index} />
          ))}
        </SearchResultTable>
      )}
      <UploadModal />
    </div>
  )
}
