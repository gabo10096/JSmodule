const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    if (!(email === 'gabo@gmail.com' && password === '123')) {
        res.status(401).send({
            error : "User o pass no valido"
        })
        return 
    }
    const tokenData = {
        user:{
            email,
            name:'Gabriel Aguilar',
            roles: ['admin', 'copywriter']
        }
    }
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn:60 * 60 * 24})
    res.send({token})
})

module.exports = router