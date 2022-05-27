import { animationClasses } from 'constants/constants'
import React from 'react'

interface CircleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  bg?: string
  position?: string
}

const CircleButton: React.FC<CircleButtonProps> = ({
  bg,
  position = 'right-0 top-0',
  children,
  ...divProps
}) => {
  return (
    <div
      className={`absolute ${position} mx-4 my-4 md:mx-6 md:my-6 z-50`}
      {...divProps}
    >
      <div
        className={`${animationClasses} rounded-full p-3  cursor-pointer ${bg} hover:scale-105`}
      >
        {children}
      </div>
    </div>
  )
}

export default CircleButton
