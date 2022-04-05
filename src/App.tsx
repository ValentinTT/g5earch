import SearchBar from 'components/SearchBar/SearchBar'
import Title from 'components/Title'
import { useState } from 'react'

function App() {
  const [isFocus, setFocus] = useState(false)
  const handleButtonClicked = (searchText: string) => {
    if (!isFocus) return setFocus(true)
    console.log(`Tenemos que buscar: ${searchText}`)
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-stone-200'>
      <Title isFocus={isFocus}>G5earch!</Title>
      <SearchBar
        isFocus={isFocus}
        setFocus={setFocus}
        handleSearchButtonClicked={handleButtonClicked}
      />
    </div>
  )
}

export default App
