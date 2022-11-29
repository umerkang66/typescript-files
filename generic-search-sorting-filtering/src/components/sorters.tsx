import { Fragment } from 'react';
import { ISortProp } from '../interfaces';

interface Props<T> {
  object: T;
  setProperty: (propertyType: ISortProp<T>) => void;
}

function Sorters<T extends Object>(props: Props<T>) {
  return (
    <div>
      <label htmlFor="sorters" className="mt-3">
        Sorters
      </label>
      <select
        onChange={e => {
          const [key, isDescendingStr] = e.target.value.split('-');

          props.setProperty({
            property: key as keyof T,
            isDescending: isDescendingStr === 'true',
          });
        }}
        id="sorters"
        className="custom-select"
      >
        {Object.keys(props.object).map(key => {
          return (
            <Fragment key={key}>
              {/* isDescending is false */}
              <option value={`${key}-false`}>Sort by '{key}' Ascending</option>

              {/* isDescending is true */}
              <option value={`${key}-true`}>Sort by '{key}' Descending</option>
            </Fragment>
          );
        })}
      </select>
    </div>
  );
}

export default Sorters;
