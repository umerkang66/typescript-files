export function genericSearch<T>(
  data: T,
  properties: (keyof T)[],
  query: string
): boolean {
  if (!query) {
    // if there is no query, not filter anything
    return true;
  }

  return properties.some(property => {
    // only truth values (from boolean array) will be returned from some function
    const value = data[property];

    if (typeof value !== 'string' && typeof value !== 'number') {
      // don't search if valueForSearch is not string or number
      return false;
    }

    return value.toString().toLowerCase().includes(query.toLowerCase());
  });
}
