import SearchBar from 'components/SearchBar/SearchBar'
import Title from 'components/Title'
import { useEffect, useState } from 'react'
import { createServer } from 'miragejs'

let server = createServer({})
server.get('/api/buscar/:text', (schema, req) => {
  console.log(req)
  return Array.from({ length: Math.floor(Math.random() * 5) }, () => ({
    link: 'https://www.anderson1.org/site/handlers/filedownload.ashx?moduleinstanceid=24440&dataid=44258&FileName=hobbit.pdf',
    title: 'The hoBbIt',
    preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  }))
})

export default function App() {
  const [isFocus, setFocus] = useState(false)
  const handleButtonClicked = (searchText: string) => {
    if (!isFocus) return setFocus(true)
    console.log(`Tenemos que buscar: ${searchText}`)
    fetch('/api/buscar/' + encodeURIComponent(searchText))
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
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
