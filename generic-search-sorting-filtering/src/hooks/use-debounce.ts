import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delayInSeconds: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInSeconds * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delayInSeconds]);

  return debouncedValue;
}
