const Koa = require('koa');
const app = new Koa();

//router
const Router = require('koa-router');

//父路由
const router = new Router();

//bodyparser:该中间件用于post请求的数据
const koaBody = require('koa-body');
app.use(koaBody());

//引入数据库操作方法
const UserController = require('./controller/user.js');

//checkToken作为中间件存在
const checkToken = require('./token/checkToken.js');

//登录
const loginRouter = new Router();
loginRouter.post('/login', UserController.Login);
//注册
const registerRouter = new Router();
registerRouter.post('/register', UserController.Reg);

//获取所有用户
const userRouter = new Router();
userRouter.get('/user', checkToken, UserController.GetAllUsers);

//删除某个用户
const delUserRouter = new Router();
delUserRouter.post('/delUser', checkToken, UserController.DelUser);

//查找当前用户信息
const getUserRouter = new Router();
getUserRouter.post('/oneUser', checkToken, UserController.GetOneUser);

//添加我喜欢
const addFilmTicket = new Router();
addFilmTicket.post('/ticket', checkToken, UserController.AddFilmTicket);

//装载上面四个子路由
router.use('/api',loginRouter.routes(),loginRouter.allowedMethods());
router.use('/api',registerRouter.routes(),registerRouter.allowedMethods());
router.use('/api',userRouter.routes(),userRouter.allowedMethods());
router.use('/api',delUserRouter.routes(),delUserRouter.allowedMethods());
router.use('/api',getUserRouter.routes(),getUserRouter.allowedMethods())
router.use('/api',addFilmTicket.routes(),addFilmTicket.allowedMethods())



//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(8888, () => {
    console.log('The server is running at http://localhost:' + 8888);
});

