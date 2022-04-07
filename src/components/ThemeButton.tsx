import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'))
  }, [])
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem('g5earchDarkMode', 'true')
    } else {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('g5earchDarkMode', 'false')
    }
  }, [darkMode])
  const onClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className='absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6'>
      <div className='transition ease-in-out rounded-full p-2'>
        {darkMode ? (
          <FaSun
            onClick={() => onClick()}
            className='text-neutral-900 dark:text-stone-300 text-xl cursor-pointer'
          />
        ) : (
          <FaMoon
            onClick={() => onClick()}
            className='text-neutral-900 dark:text-stone-300 text-xl cursor-pointer'
          />
        )}
      </div>
    </div>
  )
}
