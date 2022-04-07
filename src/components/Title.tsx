import clsx from 'clsx'

interface G5earchTitleProps {
  isFocus: boolean
  children: React.ReactNode
}

export default function Title({ isFocus, children }: G5earchTitleProps) {
  const textColor =
    'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
  return (
    <h1
      className={clsx(
        'mb-3 z-10',
        'font-semibold select-none',
        'transition-all ease-in-out',
        textColor,
        isFocus ? 'text-6xl' : 'text-3xl -translate-x-12 translate-y-12'
      )}
    >
      {children}
    </h1>
  )
}
