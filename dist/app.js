const express = require('express')
const app = express()
app.get('/aa', (req, res) => {
    res.send('hello world!!')
})

app.use(express.static('./'))

app.listen(3000, () => {
    console.log('服务器运行于3000端口')
})