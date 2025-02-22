import type { ComponentProps } from 'react'

interface RootProps extends ComponentProps<'div'> {
  error?: boolean
}

function Root({ children, error = false, ...props }: RootProps) {
  return (
    <div
      data-error={error}
      className="group flex h-12 w-full items-center gap-2 rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 focus-within:border-gray-100 data-[error=true]:border-danger"
    >
      {children}
    </div>
  )
}

interface FieldProps extends ComponentProps<'input'> {}

function Field({ ...props }: FieldProps) {
  return (
    <input className="flex-1 outline-0 placeholder:text-gray-400" {...props} />
  )
}

interface IconProps extends ComponentProps<'span'> {}

function Icon({ children, ...props }: IconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger group-data-[error=true]:[&:not(:has(input:placeholder-shown))]:text-danger"
      {...props}
    >
      {children}
    </span>
  )
}

export const Input = {
  Root,
  Field,
  Icon,
}
