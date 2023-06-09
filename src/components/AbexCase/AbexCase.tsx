import React from 'react'

/**
 * The AbexCase component is used within the AbexSwitch component 
 * to define different cases or variants based on the assigned 
 * variant key. It allows rendering different content based 
 * on the variant assigned to the user.
 */
const AbexCase = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
)

export default AbexCase;
