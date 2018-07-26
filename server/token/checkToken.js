const jwt = require('jsonwebtoken');

module.exports = async ( ctx, next ) => {
  //拿到token
  const authorization = ctx.get('Authorization');
  if (authorization === '') {
      ctx.throw(401, 'no token detected in http headerAuthorization');
  }
  const token = authorization.split(' ')[1];
  let tokenContent;
  try {
      tokenContent = await jwt.verify(token, 'zhangzhongjie');//如果token过期或验证失败，将抛出错误
  } catch (err) {
      ctx.throw(401, 'invalid token');
  }
  await next();
};

/*
let getToken = async (ctx, next) => {
  const authorization = ctx.get('Authorization');
  if(authorization === '') {
    ctx.throw(401, 'no token detected in http headerAuthorization');
  }
  const token = authorization.split(' ')[1];
  let tokenContent;
    try {
        tokenContent = await jwt.verify(token, 'zhangzhongjie');//如果token过期或验证失败，将抛出错误
    } catch (err) {
        ctx.throw(401, 'invalid token');
    }
    await next();
};

export default getToken
*/
