import { useState, useEffect } from 'react';
import debounce from 'debounce';

export const SIZE_XS = 'xs';
export const SIZE_SM = 'sm';
export const SIZE_MD = 'md';
export const SIZE_LG = 'lg';
export const SIZE_XL = 'xl';
export const SIZE_XXL = 'xxl';

const resolveBreakpoint = width => {
  if (width < 576) {
    return SIZE_XS;
  } else if (width >= 576 && width < 768) {
    return SIZE_SM;
  } else if (width >= 768 && width < 992) {
    return SIZE_MD;
  } else if (width >= 992 && width < 1200) {
    return SIZE_LG;
  } else if (width >= 1200 && width < 1440) {
    return SIZE_XL;
  } else if (width >= 1440) {
    return SIZE_XXL;
  }
};

const useBreakpoint = () => {
  const [size, setSize] = useState(() => resolveBreakpoint(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = debounce(() => {
      setSize(resolveBreakpoint(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return size;
};

export default useBreakpoint;

export const mapBreakPointToImage = {
  [SIZE_XS]: 'w185',
  [SIZE_SM]: 'w342',
  [SIZE_MD]: 'w500',
  [SIZE_LG]: 'w500',
  [SIZE_XL]: 'w780',
  [SIZE_XXL]: 'original',
};
