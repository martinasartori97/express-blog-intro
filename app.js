const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('benvenuto nel mio blog!')
})
