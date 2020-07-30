const router = require('express').Router()
const cors = require('cors')

/* activate cors middleware */
router.use(cors())

router.get('/', (req, res, next) => {
    res.send("this is index route index/index: ")
    console.log(req.headers)
})

router.get('/page', (req, res, next) => {
    res.send("this is route index/page")
})

module.exports = router