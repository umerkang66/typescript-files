import { Router } from 'express';

export class AppRouter {
  private static instance: Router;

  static getInstance(): Router {
    // If instance is not available create it
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }

    return AppRouter.instance;
  }
}
