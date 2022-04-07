import clsx from 'clsx'

interface G5earchTitleProps {
  isFocus: boolean
  children: React.ReactNode
}

export default function Title({ isFocus, children }: G5earchTitleProps) {
  const textColor =
    'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
  return (
    <div
      className={clsx(
        textColor,
        'transition-all ease-in-out',
        isFocus ? '' : ' -translate-x-12 translate-y-12'
      )}
    >
      <h1
        className={clsx(
          'mb-3 z-10',
          'font-semibold select-none',
          'transition-all ease-in-out',
          isFocus ? 'text-6xl' : 'text-3xl'
        )}
      >
        {children}
      </h1>
    </div>
  )
}
