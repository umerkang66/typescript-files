import 'reflect-metadata';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetaDataKeys } from './MetaDataKeys';

function bodyValidator(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    // If req.body doesn't exist return error
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      // If a certain key doesn't exist return an error
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
  };
}

// This is a class decorator, this run after all the decorators in the class will be ran
export function controller(routePrefix: string) {
  // When we apply decorator to class, we get target as constructor function
  return function (target: Function) {
    const router = AppRouter.getInstance();

    // Check if some metadata is applied to any method in prototype of target (constructor function: class itself)
    for (let key in target.prototype) {
      // These will be the route handlers, where these route decorators should have joined
      const routeHandler = target.prototype[key];

      // Pull of routeHandlers path
      const path = Reflect.getMetadata(
        MetaDataKeys.path,
        target.prototype,
        key
      );

      // Pull of routeHandlers method (get, post, ...)
      const method: Methods = Reflect.getMetadata(
        MetaDataKeys.method,
        target.prototype,
        key
      );

      // Pull of routeHandlers middlewares
      // These are middlewares only for this routeHandlers, that is currently being processed, middlewares will be undefined if there are no @use decorators calls
      const middlewares =
        Reflect.getMetadata(MetaDataKeys.middleware, target.prototype, key) ||
        [];

      // Body props that needs to be validated
      const requiredBodyProps =
        Reflect.getMetadata(MetaDataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidator(requiredBodyProps);

      // Use these paths, methods, and middlewares in global router obj
      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
