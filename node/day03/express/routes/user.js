
import express from 'express'

const router = express.Router()


router.post("/sign-up", (req, res) => {
    // 유효성 검사
    // 중복되는 계정이 있는지 검사
    // db에 data를 insert
    console.log(req.body)

    res.json({
        ok: true,
        message: "회원가입을 축하합니다"
    })
})

export default router