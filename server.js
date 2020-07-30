const app = require('express')()
const port = process.env.PORT || 3000

/* define module routes*/
const index = require('./routes/index')
const bacot = require('./routes/bacot')

/* define route */
app.use('/', index)
app.use('/bacot', bacot)

app.listen(port, () => {
    console.log(` listen on port ${port}`)
})