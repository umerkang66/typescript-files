import { createContext, PropsWithChildren, useState } from 'react';

export const QueryContext = createContext({
  query: '',
  setSearchQuery: (query: string) => {},
});

export function QueryContextProvider({ children }: PropsWithChildren) {
  const [searchQuery, setSearchQuery] = useState('');

  const valueToShare = {
    query: searchQuery,
    setSearchQuery,
  };

  return (
    <QueryContext.Provider value={valueToShare}>
      {children}
    </QueryContext.Provider>
  );
}
