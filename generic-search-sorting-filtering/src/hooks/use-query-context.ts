import { useContext } from 'react';
import QueryContext from '../contexts/query-context';

export function useQueryContext() {
  return useContext(QueryContext);
}
