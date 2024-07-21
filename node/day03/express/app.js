
const express = require('express')
// package.json --> type = 'module' --> require(x)

const app = express()
app.use(express.json())
// port를 정할떄 기준, 이미 사용중인 포트는 사용안됨

app.get('/test/:testId', (req, res) => {
    // "/test/3"
    console.log(req.params.testId)

    // "/test?testId=2"
    console.log(req.params.testId)
    res.json({
        testId: req.params.testId
    })
})

app.post('/test', (req, res) => {

    console.log(req.query.testId)
    console.log(req.body)
    res.json({
        testId: req.query.testId
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

