import { Request, Response } from 'express';
import { bodyValidator, controller, get, post } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'ugulzar4512@gmail.com' && password === 'password') {
      // Mark this person as logged in
      req.session = { loggedIn: true };

      // Redirect to the root route
      res.redirect('/');
    } else {
      res.status(401).send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
