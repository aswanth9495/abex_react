import { useContext } from 'react';

import { AbexContext } from '../context';

const useAbex = (experimentKey: string): string => {
  const variantKeys = useContext(AbexContext);

  return variantKeys[experimentKey];
};

export default useAbex;
