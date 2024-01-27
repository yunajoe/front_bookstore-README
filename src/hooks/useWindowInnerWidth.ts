/* 윈도우 창의 화면 크기가 바뀔 때마다 innerWidth를 측정해 리턴하는 훅 */

import { useState, useEffect, useCallback } from "react";

function useWindowInnerWidth() {
  const [dynamicWid, setDynamicWid] = useState(0);

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setDynamicWid(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [dynamicWid]);
    
    return {dynamicWid};
}

export default useWindowInnerWidth;