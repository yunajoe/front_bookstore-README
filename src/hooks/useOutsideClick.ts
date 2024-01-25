import { useEffect, MutableRefObject } from 'react';

function useOutSideClick(
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: () => void,
) {
  const handleOutsideClick = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });
}

export default useOutSideClick;
