const jwt = require('jsonwebtoken')

module.exports = function (options){
    return function (req, res, next){
        let token = req.headers['authorization']
        if (!token) {
            res.status(401).send({
                error: "Es necesario el token de autenticacion"
            })
            return 
        }
        token = token.replace('Bearer ', '')
        jwt.verify(token, process.env.JWT_SECRET, function(err, user){
            if (err) {
                res.status(401).send({
                    error: "Token invalido"
                })
            }else{
                next()
            }
        })
    }
}