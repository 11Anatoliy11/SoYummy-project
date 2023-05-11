import { useState, useEffect } from 'react';

export const useIsSmallScreen = (maxWidth = 1279.9) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= maxWidth
  );

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= maxWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxWidth]);

  return isSmallScreen;
};