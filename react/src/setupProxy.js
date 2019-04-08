const HttpProxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(HttpProxy('/api', {target: 'http://localhost:5000/'}))
}