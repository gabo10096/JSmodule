const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

router.use((req, res, next) => {
    console.log("Time: ", Date.now())
    next()
}, auth())

router.delete('/', (req, res) => {
    const {id} = req.body
    const store = req.app.get('store')
    store.Courses.destroy(
        {where: { id }})
        .then((result) => {
            res.send({result})
        })
    })

router.put('/', (req, res) => {
    const {id,name,image, category, start_date} = req.body
    const store = req.app.get('store');
    store.Courses.update(
        {name, image, category,start_date},
        {where:{id}})
    .then(result => {
        res.send({result})
    })
})

router.post('/', (req, res) => {
    const {name,image, category, start_date} = req.body
    const store = req.app.get('store');
    store.Courses.create({name, image, category,start_date})
    .then(result => {
        res.send({result})
    })
})

router.get("/", (req, res) => {
    const store = req.app.get('store');
    const result = store.Courses.findAll()
    .then((result) => {
        res.send(result)
    })
})

router.get("/info", (req, res) => {
    res.send('Courses Info')
})

module.exports = router