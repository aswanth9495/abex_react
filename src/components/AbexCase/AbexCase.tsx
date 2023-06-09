import React from 'react';

interface AbexCaseProps {
  variant: string;
  children: React.ReactNode;
}

/**
 * The AbexCase component is used within the AbexSwitch component
 * to define different cases or variants based on the assigned
 * variant key. It allows rendering different content based
 * on the variant assigned to the user.
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AbexCase: React.FC<AbexCaseProps> = ({ variant, children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default AbexCase;
