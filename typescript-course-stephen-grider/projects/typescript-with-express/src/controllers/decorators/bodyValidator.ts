import 'reflect-metadata';
import { MetaDataKeys } from './MetaDataKeys';
import { RouteHandlerDescriptor } from './RouteHandlerDescriptor';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: RouteHandlerDescriptor) {
    Reflect.defineMetadata(MetaDataKeys.validator, keys, target, key);
  };
}
