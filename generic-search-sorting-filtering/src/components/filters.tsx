interface Props<T> {
  data: T;
  properties: Array<keyof T>;
  onChangeFilter: (key: keyof T) => void;
}

export default function Filters<T>(props: Props<T>) {
  const { data, properties, onChangeFilter } = props;

  return (
    <div>
      <label>Filters</label>
      {Object.keys(data as Object).map(key => {
        return (
          <div key={key}>
            <input
              id={key}
              type="checkbox"
              value={key}
              onChange={() => onChangeFilter(key as keyof T)}
              checked={properties.some(property => property === key)}
            />
            <label htmlFor={key}>'{key}' is truthy</label>
          </div>
        );
      })}
    </div>
  );
}
