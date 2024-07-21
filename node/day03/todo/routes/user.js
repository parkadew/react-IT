
import express from 'express'
import bcrypt from 'bcrypt'

const router = express.Router()
router.post('/sign-up', async (req, res) => {
    const { email, password } = req.body
    const existUser = await Users.findOne({
        where: {
            email
        }
    })

    if (existUser) return res.json({
        ok: false,
        message: "이미 존재하는 이메일입니다"
    })

    const hashedPassword = await bcrypt.hash(password, 12)
    await Users.create({
        email,
        password: hashedPassword
    })
    res.json({ ok: true, message: "회원가입을 축하합닏" })
})
export default router