const routers = [
    require('./users'),
    require('./index1')
]
module.exports = (app)=>{
    routers.forEach(r=>{
        app.use(r.routes(),r.allowedMethods())
    })
}