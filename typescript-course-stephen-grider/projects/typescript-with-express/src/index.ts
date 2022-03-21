import express from 'express';
import { router as loginRouter } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
// cookieSession type definition files add some properties to the Request Interface, thus we can access them
app.use(cookieSession({ keys: ['umer_kang_umer_kang'] }));

// Wiring up route handlers
app.use(loginRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
