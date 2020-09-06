import express from 'express'
import sendEmailController from '../controllers/sendEmailController'

const router = express.Router()

router.post('/', (req, res, next) => {
    try {
        console.log('hello')
        // await handleSendEmail()
        res.sendStatus(201)
        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
})

// module.exports = router;
export default router