import { useState } from 'react';

import SearchInput from './components/search-input';
import { persons, widgets } from './mock-data';
import { useQueryContext } from './hooks';
import { genericSort, genericSearch, genericFilter } from './utils';
import { IPerson, ISortProp, IWidget } from './interfaces';
import Sorters from './components/sorters';
import Filters from './components/filters';

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

  const [widgetFilterProps, setWidgetFilterProps] = useState<(keyof IWidget)[]>(
    []
  );

  const [personFilterProps, setPersonFilterProps] = useState<(keyof IPerson)[]>(
    []
  );

  return (
    <div className="app">
      <SearchInput />

      <h1>Widgets</h1>
      <Sorters
        object={widgets[0]}
        setProperty={property => setWidgetSortProp(property)}
      />
      <Filters
        data={widgets[0]}
        properties={widgetFilterProps}
        onChangeFilter={key => {
          setWidgetFilterProps(prevProps => {
            return prevProps.includes(key)
              ? prevProps.filter(prop => prop !== key)
              : [...prevProps, key];
          });
        }}
      />

      {widgets
        .filter(widget =>
          genericSearch(widget, ['title', 'description'], query)
        )
        .filter(widget => genericFilter(widget, widgetFilterProps))
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
      <Filters
        data={persons[0]}
        properties={personFilterProps}
        onChangeFilter={key => {
          setPersonFilterProps(prevProps => {
            return prevProps.includes(key)
              ? prevProps.filter(prop => prop !== key)
              : [...prevProps, key];
          });
        }}
      />

      {persons
        .filter(person =>
          genericSearch(person, ['firstName', 'lastName', 'eyeColor'], query)
        )
        .filter(person => genericFilter(person, personFilterProps))
        .sort((a, b) => genericSort(a, b, personSortProp))
        .map((person, i) => (
          <pre key={i}>
            <h3>{JSON.stringify(person, null, 2)}</h3>
          </pre>
        ))}
    </div>
  );
}
