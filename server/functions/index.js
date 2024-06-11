const server = require('./server')

const {onRequest} = require("firebase-functions/v2/https");

exports.api = onRequest((req, res) => {
    server.emit('request', req, res)
})

