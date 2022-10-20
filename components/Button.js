/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

import { cls } from './src/utils.js'

const classes = {
  base: 'focus:outline-none transition-all ease-in-out duration-300 ',
  disabled: 'opacity-50 cursor-not-allowed',

  variant: {
    primary:
      'group-hover:bg-bluenight-500 shadow-xl bg-bluenight-500 transition-all text-white group-hover:text-mirage-60 ',
    secondary:
      'text-mirage-60 group-hover:text-mirage-60 transition-all group-hover:bg-zinc-700 bg-zinc-900',
    tertiary: 'text-mirage-60 border',
  },
}

const Button = forwardRef(
  (
    { children, className, variant = 'primary', disabled = false, as = 'button', ...props },
    ref
  ) => {
    const Tag = as || 'button'

    return (
      <Tag
        ref={ref}
        disabled={disabled}
        className={cls(`
                mt-6
                group
                ${classes.base}

                ${disabled && classes.disabled}
                ${className}
            `)}
        {...props}
      >
        <div className={`inline-flex group ${classes.variant[variant]}`}>
          <div className="px-6 my-4 text-base font-medium">{children}</div>
        </div>
      </Tag>
    )
  }
)

export default Button
