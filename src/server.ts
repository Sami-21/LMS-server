import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import BooksRoute from './routes/books.route';

validateEnv();

const app = new App([new IndexRoute(), new BooksRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
