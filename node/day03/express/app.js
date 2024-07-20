
const express = require('express')
// package.json --> type = 'module' --> require(x)

const app = express()
// port를 정할떄 기준, 이미 사용중인 포트는 사용안됨

app.get('/test', (req, res) => {
    console.log(req)
    res.json({
        name: 'gwan'
    })
})

app.post('/test', (_, res) => {
    console.log(req.body)
    res.json({
        name: "park"
    })
})

// port를 정할떄 기준, 이미 사용 중인 포트는 사용하면 안됩니다
// http://localhost:3030 --> 
// http://gwan.com
// https://gwan.com (SSL 인증서) 

app.listen(3030, () => {
    console.log("start server : 3030")
})
// app.listen(port,callback)

