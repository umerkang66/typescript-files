import { useState } from 'react';

import SearchInput from './components/search-input';
import { persons, widgets } from './mock-data';
import { useQueryContext } from './hooks';
import { genericSort, genericSearch } from './utils';
import { IPerson, ISortProp, IWidget } from './interfaces';
import Sorters from './components/sorters';

export default function App() {
  const { query } = useQueryContext();

  const [widgetSortProp, setWidgetSortProp] = useState<ISortProp<IWidget>>({
    property: 'title',
    isDescending: false,
  });

  const [personSortProp, setPersonSortProp] = useState<ISortProp<IPerson>>({
    property: 'firstName',
    isDescending: false,
  });

  return (
    <div className="app">
      <SearchInput />

      <h1>Widgets</h1>
      <Sorters
        object={widgets[0]}
        setProperty={property => setWidgetSortProp(property)}
      />

      {widgets
        .filter(widget =>
          genericSearch(widget, ['title', 'description'], query)
        )
        .sort((a, b) => genericSort(a, b, widgetSortProp))
        .map(widget => (
          <pre key={widget.id}>
            <h3>{JSON.stringify(widget, null, 2)}</h3>
          </pre>
        ))}

      <h1>Persons</h1>
      <Sorters
        object={persons[0]}
        setProperty={property => setPersonSortProp(property)}
      />

      {persons
        .filter(person =>
          genericSearch(person, ['firstName', 'lastName', 'eyeColor'], query)
        )
        .sort((a, b) => genericSort(a, b, personSortProp))
        .map((person, i) => (
          <pre key={i}>
            <h3>{JSON.stringify(person, null, 2)}</h3>
          </pre>
        ))}
    </div>
  );
}
