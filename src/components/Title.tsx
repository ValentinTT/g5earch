interface G5earchTitleProps {
  isFocus: boolean
  children: React.ReactNode
}

export default ({ isFocus, children }: G5earchTitleProps) => {
  return (
    <h1
      className={`transition-all duration-300 ease-in-out select-none ${
        isFocus ? 'mb-5 text-4xl' : 'pr-10 -ml-24 -mb-8 text-xl '
      }`}
    >
      {children}
    </h1>
  )
}
