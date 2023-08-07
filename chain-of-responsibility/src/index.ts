import Server from './servers/Server';
import CheckUserMiddleware from './middlewares/CheckUserMiddleware';
import CheckPermissionMiddleware from './middlewares/CheckPermissionMiddleware';

const server = new Server();

const middleware = new CheckUserMiddleware()
middleware.linkWith(new CheckPermissionMiddleware())

server.setMiddleware(middleware);

server.logIn('admin@chain.com', '123456')