// 获取用户
exports.getUser = async(ctx,next)=>{
    ctx.body = {
        username:'xsx',
        age:24
    }
}

exports.registerUser = async (ctx,next)=>{
    ctx.body = {
        username:'xsx12312',
        age:24
    }
    console.log('registerUser',ctx.request.body)
}