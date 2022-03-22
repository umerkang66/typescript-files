import express from 'express';
import cookieSession from 'cookie-session';

// Controllers
import './controllers/loginController';
import './controllers/rootController';

// Routers
import { AppRouter } from './AppRouter';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
// cookieSession type definition files add some properties to the Request Interface, thus we can access them
app.use(cookieSession({ keys: ['umer_kang_umer_kang'] }));

// Wiring up routes
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
