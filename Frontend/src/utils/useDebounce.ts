import { useEffect, useState } from "react";
type TUseDebounce = {
  searchQuery: string;
  delay: number;
};
export const useDebounce = ({ searchQuery, delay }: TUseDebounce) => {
  const [debounceValue, setDebounceValue] = useState<string>(searchQuery);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchQuery);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);
  return debounceValue;
};
