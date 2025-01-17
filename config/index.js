var dev_env = require('./dev');
var test_env = require('./test');

//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
module.exports = {
    development: dev_env,
    test: test_env
}[process.env.NODE_ENV || 'development']