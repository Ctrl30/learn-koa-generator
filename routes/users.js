const router = require('koa-router')()
const userController = require('../app/user_controller');

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/getUser',userController.getUser)
router.post('/registerUser',userController.registerUser)
module.exports = router
