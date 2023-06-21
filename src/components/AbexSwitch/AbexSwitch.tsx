import React, { useContext, ReactNode } from 'react';
import { AbexContext } from '../../context';

interface AbexSwitchProps {
  experimentKey: string;
  children: ReactNode;
}

/**
 * The AbexSwitch component is a higher-level component
 * that allows rendering different content based on the
 * assigned variant key. It acts as a switch statement to
 * conditionally render the appropriate content based
 * on the assigned variant key.
 */

const AbexSwitch: React.FC<AbexSwitchProps> = ({ experimentKey, children }) => {
  const variantKeys = useContext(AbexContext);

  const variantKey = variantKeys[experimentKey] || null;

  let selectedCase: ReactNode = null;
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as { variant?: string };
      if (childProps.variant === variantKey) {
        selectedCase = child;
      }
      if (childProps.variant === 'default' && !selectedCase) {
        selectedCase = child;
      }
    }
  });

  return selectedCase || null;
};

export default AbexSwitch;
