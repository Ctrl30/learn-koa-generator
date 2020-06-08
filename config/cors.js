const corsConfig = {
    origin :function (ctx) {
        return "*"
    },
    credentials: true,
}
module.exports = corsConfig