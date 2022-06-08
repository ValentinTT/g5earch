import { useReducer } from 'react'
import clsx from 'clsx'
import { ThemeButton } from 'components/ThemeButton'
import Title from 'components/Title'
import SearchBar from 'components/SearchBar/SearchBar'
import LoadingSpinner from 'components/LoadingSpinner'
import SearchResult, { SearchResultTable } from 'components/SearchResult'
import UploadModal from 'components/UploadModal/UploadModal'
import { AppActions, appReducer, initialState } from 'reducer/reducer'

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const handleButtonClicked = async (searchText: string) => {
    if (!state.isFocus)
      return dispatch({
        type: AppActions.updateFocus,
        payload: { isFocus: true },
      })
    if (searchText === '') return undefined

    dispatch({ type: AppActions.updateLoading, payload: { isLoading: true } })
    setTimeout(() => {
      if (!state.isLoading) return
      dispatch({
        type: AppActions.updateLoading,
        payload: { isLoading: false },
      })
    }, 3000)

    try {
      let res = await fetch('/search?text=' + encodeURIComponent(searchText))
      let responses = await res.json()
      console.log('Response: ', responses)
      dispatch({
        type: AppActions.updateData,
        payload: { searchResults: responses },
      })
    } catch (e) {
      dispatch({ type: AppActions.error })
    }
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
        <Title isFocus={state.isFocus}>G5earch!</Title>
        <SearchBar
          isFocus={state.isFocus}
          setFocus={(newFocus) =>
            dispatch({
              type: AppActions.updateFocus,
              payload: { isFocus: newFocus },
            })
          }
          handleSearchButtonClicked={handleButtonClicked}
        />
      </div>
      {state.isLoading ? (
        <div className='pt-10'>
          <LoadingSpinner />
        </div>
      ) : (
        <SearchResultTable
          handleCloseButtonClicked={() =>
            dispatch({
              type: AppActions.updateData,
              payload: {
                searchResults: undefined,
              },
            })
          }
        >
          {state.searchResults && state.searchResults.length === 0 ? (
            <p className='bg-slate-500 dark:bg-slate-100 text-slate-100 dark:text-slate-800 py-1 px-2 rounded-sm animate-pulse'>
              No se encontraron resultados
            </p>
          ) : (
            state.searchResults?.map((result, index) => {
              console.log(result)
              return <SearchResult result={result} key={result.link + index} />
            })
          )}
        </SearchResultTable>
      )}
      <UploadModal />
    </div>
  )
}
