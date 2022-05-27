import clsx from 'clsx'
import { animationClasses, gradient } from 'constants/constants'

const Title: React.FC<{ isFocus: boolean }> = ({ isFocus, children }) => {
  return (
    <div
      className={clsx(
        'text-transparent bg-clip-text',
        gradient,
        animationClasses,
        isFocus ? '' : ' -translate-x-12 translate-y-12'
      )}
    >
      <h1
        className={clsx(
          'mb-3 z-20',
          'font-semibold select-none',
          animationClasses,
          isFocus ? 'text-6xl' : 'text-3xl'
        )}
      >
        {children}
      </h1>
    </div>
  )
}

export default Title
