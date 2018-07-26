const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();  //父路由
app.use(bodyParser());

const UserController = require('./server/controller/user.js');

const checkToken = require('./server/token/checkToken.js');

const loginRouter = new Router();
const registerRouter = new Router();
const userRouter = new Router();
const delUserRouter = new Router();

loginRouter.post('./login', UserController.Login);
registerRouter.post('./register', UserController.Reg);
userRouter.get('./user', checkToken, UserController.GetAllUsers);
delUserRouter.post('./delUser', checkToken, UserController.DelUser);

router.use('./api', loginRouter.routes(), loginRouter.allowedMethods());
router.use('/api',registerRouter.routes(),registerRouter.allowedMethods());
router.use('/api',userRouter.routes(),userRouter.allowedMethods());
router.use('/api',delUserRouter.routes(),delUserRouter.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(8888, () => {
    console.log('The server is running at http://localhost:' + 8888);
});
