import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetaDataKeys } from './MetaDataKeys';
import { RouteHandlerDescriptor } from './RouteHandlerDescriptor';

export function use(...middlewaresFromUse: RequestHandler[]) {
  return function (target: any, key: string, desc: RouteHandlerDescriptor) {
    // Target is prototype of class (that has all the methods) (even it is applied to a method), KEY is method name (to which this is actually described)

    // First get the previous middlewares array
    // If middleware array exist use that otherwise create an empty array
    const middlewares =
      Reflect.getMetadata(MetaDataKeys.middleware, target, key) || [];

    // Then add the new middleware in that middlewares array
    middlewares.push(...middlewaresFromUse);

    // Define middlewares array back to the target[key]
    Reflect.defineMetadata(MetaDataKeys.middleware, middlewares, target, key);
  };
}
