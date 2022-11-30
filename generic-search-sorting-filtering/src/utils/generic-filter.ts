export function genericFilter<T>(
  data: T,
  filterProperties: Array<keyof T>
): boolean {
  return filterProperties.every(filterProp => {
    return data[filterProp] ? true : false;
  });
}
