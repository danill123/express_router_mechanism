const router = require('express').Router();
const cors = require('cors')
const single = require('./single');

/* activate cors middleware */
router.use(cors())

router.get('/', (req, res, next) => {
    res.send('router bacot/index')
})

router.get('/bacot', (req, res, next) => {
    res.send('router bacot/bacot')
})

router.get('/:id', single)


module.exports = router