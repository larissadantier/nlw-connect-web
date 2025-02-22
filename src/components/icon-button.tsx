import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

function IconButton({ children, className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'w-min cursor-pointer rounded-md bg-gray-500 p-1.5 text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton
