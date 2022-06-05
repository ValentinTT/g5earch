import { useState } from 'react'
import clsx from 'clsx'
import { ThemeButton } from 'components/ThemeButton'
import Title from 'components/Title'
import SearchBar from 'components/SearchBar/SearchBar'
import LoadingSpinner from 'components/LoadingSpinner'
import { SearchResultResponse } from './@types/searchResultResponse'
import SearchResult, { SearchResultTable } from 'components/SearchResult'
import UploadModal from 'components/UploadModal/UploadModal'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isFocus, setFocus] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResultResponse[]>([])

  const handleButtonClicked = async (searchText: string) => {
    if (!isFocus) return setFocus(true)
    if (searchText === '') return
    setIsLoading(true)
    setTimeout(() => {
      if (isLoading) setIsLoading(false)
    }, 3000)
    try {
      let res = await fetch('/search?text=' + encodeURIComponent(searchText))
      let aux = await res.json()
      console.log('Response: ', aux)
      setSearchResults(() => {
        setIsLoading(false)
        return aux
      })
    } catch (e) {
      console.log('Error')
      setIsLoading((_) => {
        setFocus(false)
        return false
      })
    }
  }
  console.log('Search R: ', searchResults)
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
          setFocus={() => {
            return setFocus
          }}
          handleSearchButtonClicked={handleButtonClicked}
        />
      </div>
      {isLoading ? (
        <div className='pt-10'>
          <LoadingSpinner />
        </div>
      ) : (
        <SearchResultTable
          handleCloseButtonClicked={() => setSearchResults([])}
        >
          {searchResults?.map((result, index) => {
            console.log(result)
            return <SearchResult result={result} key={result.link + index} />
          })}
        </SearchResultTable>
      )}
      <UploadModal />
    </div>
  )
}
