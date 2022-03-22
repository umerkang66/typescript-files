import { FC, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepositories } = useActions();
  const repositoriesState = useTypedSelector(state => state.repositories);

  const { data, error, loading } = repositoriesState;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // The return value of this will be automatically pass to the dispatch function, and then flows through the redux whole loop, thanks to the useActions hook
    searchRepositories(term);
  };

  const renderRepositories = (): JSX.Element[] => {
    return data.map((repository, i) => <li key={i}>{repository}</li>);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={e => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && <ul>{renderRepositories()}</ul>}
    </div>
  );
};

export default RepositoriesList;
