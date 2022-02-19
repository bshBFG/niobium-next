import { RefreshIcon } from '@heroicons/react/outline'
import React, { ReactNode } from 'react'

type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<React.ComponentProps<Element>, 'as'> & {
    as?: Element
  }

type Props = {
  href?: string
  children: ReactNode
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'custom'
  size?: 'normal' | 'small' | 'large'
  variant?: 'text' | 'contained' | 'outlined'
  loading?: boolean
  className?: string
  dummy?: boolean
}

const Button = <Element extends React.ElementType = 'button'>(
  props: PolymorphicProps<Element, Props>
) => {
  const {
    as,
    color = 'primary',
    variant = 'contained',
    size = 'normal',
    loading = false,
    dummy = false,
    className = '',
    children,
    ...rest
  } = props
  const Component = as || (props.href ? 'a' : 'button')

  const primaryColor =
    variant === 'contained'
      ? 'bg-gradient-to-tr from-cyan-400 to-teal-400 text-white hover:from-cyan-500 hover:to-teal-500 drop-shadow-md'
      : variant === 'outlined'
      ? 'bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-gradient-to-tr hover:from-cyan-400 hover:to-teal-400 hover:text-white hover:from-cyan-500 hover:to-teal-500 hover:border-transparent drop-shadow-md'
      : 'bg-transparent text-cyan-400 hover:text-cyan-500'
  const secondaryColor =
    variant === 'contained'
      ? 'bg-gradient-to-tr from-red-400 to-orange-400 text-white hover:from-red-500 hover:to-orange-500 drop-shadow-md'
      : variant === 'outlined'
      ? 'bg-transparent text-red-400 border-2 border-red-300 hover:bg-gradient-to-tr hover:from-red-400 hover:to-orange-400 hover:text-white hover:from-red-500 hover:to-orange-500 hover:border-transparent drop-shadow-md'
      : 'bg-transparent text-red-400 hover:text-red-500'
  const customColor = ''

  const computedColor =
    color === 'primary'
      ? primaryColor
      : color === 'secondary'
      ? secondaryColor
      : color === 'custom'
      ? customColor
      : primaryColor

  const computedSize =
    size === 'normal'
      ? 'h-10 px-4 text-base font-semibold'
      : size === 'small'
      ? 'h-8 px-3 text-sm font-semibold'
      : 'h-12 px-6 text-lg font-semibold'

  const spinner = <RefreshIcon className="h-full w-full animate-spin p-2" />

  const computedClasses = dummy
    ? className
    : [computedSize, computedColor, className].join(' ')

  return (
    <Component
      className={`flex max-w-max items-center justify-center space-x-1 rounded-full disabled:opacity-60 disabled:drop-shadow-none ${computedClasses}`}
      {...rest}
    >
      {loading ? spinner : children}
    </Component>
  )
}

export { Button }
