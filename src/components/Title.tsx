interface G5earchTitleProps {
  isFocus: boolean
  children: React.ReactNode
}

export default ({ isFocus, children }: G5earchTitleProps) => {
  return (
    <h1
      className={`transition-all duration-300 ease-in-out select-none mb-3 z-10 text-indigo-600 font-semibold ${
        isFocus ? 'text-4xl' : 'text-xl -translate-x-10 translate-y-11'
      }`}
    >
      {children}
    </h1>
  )
}
