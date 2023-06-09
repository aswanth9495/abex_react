import React, { useContext, ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'

import { AbexContext } from '../context'

interface AbexSwitchProps {
  children: JSX.Element
}

export default function AbexSwitch({ children }: AbexSwitchProps): JSX.Element | null {
  const variant = useContext(AbexContext)

  let selectedCase: ReactNode = null
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as { variant?: string }
      if (childProps.variant === variant) {
        selectedCase = child
      }
      if (childProps.variant === 'default' && !selectedCase) {
        selectedCase = child
      }
    }
  })

  return selectedCase || null
}
