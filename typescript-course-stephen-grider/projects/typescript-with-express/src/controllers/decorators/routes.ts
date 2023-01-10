import 'reflect-metadata';

import { Methods } from './Methods';
import { MetaDataKeys } from './MetaDataKeys';
import { RouteHandlerDescriptor } from './RouteHandlerDescriptor';

// method can be "get", "post", "patch", "delete"
function routeBinder(method: Methods) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      // TARGET is prototype of class (that has all the methods), KEY is method name and target[key] is actually method of the class (or function) to which this decorator is attached to

      Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const patch = routeBinder(Methods.patch);
export const del = routeBinder(Methods.del);
