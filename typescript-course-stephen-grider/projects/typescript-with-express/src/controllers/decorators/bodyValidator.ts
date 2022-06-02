import 'reflect-metadata';
import { MetaDataKeys } from './MetaDataKeys';
import { RouteHandlerDescriptor } from './RouteHandlerDescriptor';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: RouteHandlerDescriptor) {
    // Target is prototype of class (that has all the methods) (even if this applied to class method)
    // Key is the actual method of class to which this applied to, TARGET is class, KEY is method name

    Reflect.defineMetadata(MetaDataKeys.validator, keys, target, key);
  };
}
