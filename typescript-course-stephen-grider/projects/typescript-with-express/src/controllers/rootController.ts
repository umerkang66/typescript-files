import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';

// In the default req obj, body is just "any"
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('You must log in to access this route');
}

// Call it with empty string, if we don't want any prefix
@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      return res.send(`
        <div>
          <h1>You are logged in</h1>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    }

    res.send(`
      <div>
        <h1>You are not logged in</h1>
        <a href="/auth/login">Login</a>
      </div>
    `);
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
    <div>
      <h1>Welcome to protected route, Logged in user</h1>
    </div>
  `);
  }
}
