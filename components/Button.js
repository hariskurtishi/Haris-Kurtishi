/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'

import { cls } from './src/utils.js'

const classes = {
  base: 'focus:outline-none transition-all ease-in-out duration-300 ',
  disabled: 'opacity-50 cursor-not-allowed',

  variant: {
    primary:
      'group-hover:bg-bluenight-500 shadow-xl bg-mirage-60 transition-all group-hover:text-white text-mirage-700 rounded-md ',
    secondary: 'text-mirage-60 group-hover:text-bluenight-500 transition-all  rounded-md',
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
          <div className="px-4 my-3 text-base font-medium">{children}</div>
        </div>
      </Tag>
    )
  }
)

export default Button
