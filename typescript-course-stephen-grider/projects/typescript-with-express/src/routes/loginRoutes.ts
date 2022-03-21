import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

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

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === 'ugulzar4512@gmail.com' &&
    password === 'password'
  ) {
    // Mark this person as logged in
    req.session = { loggedIn: true };

    // Redirect to the root route
    res.redirect('/');
  } else {
    res.status(401).send('Invalid email or password');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    return res.send(`
      <div>
        <h1>You are logged in</h1>
        <a href="/logout">Logout</a>
      </div>
    `);
  }

  res.send(`
    <div>
      <h1>You are not logged in</h1>
      <a href="/login">Login</a>
    </div>
  `);
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Welcome to protected route, Logged in user</h1>
    </div>
  `);
});

export { router };
