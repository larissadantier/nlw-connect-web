import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="flex h-12 w-full cursor-pointer items-center justify-between rounded-lg bg-gray-500 px-5 py-3 font-semibold text-base text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
