import { FC, useEffect, useState } from 'react';
import { useDebounce, useQueryContext } from '../hooks';

const SearchInput: FC = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 0.5);

  const { setSearchQuery } = useQueryContext();

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <form>
      <label htmlFor="search" className="mt-3">
        Search
      </label>
      <input
        type="search"
        id="search"
        className="form-control full-width"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
};

export default SearchInput;
