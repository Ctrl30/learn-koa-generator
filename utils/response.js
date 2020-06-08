const RESPONSE_CODE = {
  SUCCESS: 200,
  FAIL: -1,
};

/**
 * 返回response 工具方法
 * 在app.use(router)之前调用
 */
const response = async (ctx, next) => {
  // 先去执行路由
  await next();
  // 如果有返回数据，将返回数据添加到data中
  if (ctx.body) {
    ctx.body = {
      code: RESPONSE_CODE.SUCCESS,
      message: 'success',
      data: ctx.body,
    };
  } else {
    ctx.body = {
        code:RESPONSE_CODE.FAIL,
        message:'fail'
    };
  }
};

module.exports = response;