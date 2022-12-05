import { useEffect, useState } from 'react';
const useDebounce = (value, delay) => {
  const [bounce, setBounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setBounce(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return bounce;
};

export default useDebounce;
