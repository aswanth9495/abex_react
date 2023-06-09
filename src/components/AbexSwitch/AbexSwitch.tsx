import React, { useContext, ReactNode } from 'react';
import { AbexContext } from '../../context';

interface AbexSwitchProps {
  children: ReactNode[];
}

/**
 * The AbexSwitch component is a higher-level component 
 * that allows rendering different content based on the 
 * assigned variant key. It acts as a switch statement to 
 * conditionally render the appropriate content based 
 * on the assigned variant key.
 */
export default function AbexSwitch({ children }: AbexSwitchProps): JSX.Element | null {
  const variant = useContext(AbexContext);

  let selectedCase: ReactNode = null;
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as { variant?: string };
      if (childProps.variant === variant) {
        selectedCase = child;
      }
      if (childProps.variant === 'default' && !selectedCase) {
        selectedCase = child;
      }
    }
  });

  return selectedCase || null;
}
