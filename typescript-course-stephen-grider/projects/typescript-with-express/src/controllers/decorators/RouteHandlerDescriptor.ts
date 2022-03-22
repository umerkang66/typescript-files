import { RequestHandler } from 'express';

// We are just saying that if the route handler (desc.value?) property is a RequestHandler from express (it has "req", "res", "next" properties) then only allow this otherwise throw an error
export interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}
