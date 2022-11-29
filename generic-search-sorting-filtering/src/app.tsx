import SearchInput from './components/search-input';

import { persons, widgets } from './mock-data';
import { genericSearch } from './utils/generic-search';
import { useQueryContext } from './hooks';

export default function App() {
  const { query } = useQueryContext();

  return (
    <div className="app">
      <SearchInput />

      <h1>Widgets</h1>
      {widgets
        .filter(widget =>
          genericSearch(widget, ['title', 'description'], query)
        )
        .map(widget => (
          <div key={widget.id}>
            <h3>{widget.title}</h3>
            <p>{widget.description}</p>
          </div>
        ))}

      <h1>People</h1>
      {persons
        .filter(person =>
          genericSearch(person, ['firstName', 'lastName', 'eyeColor'], query)
        )
        .map((person, i) => (
          <div key={i}>
            <h3>{person.firstName}</h3>
          </div>
        ))}
    </div>
  );
}
