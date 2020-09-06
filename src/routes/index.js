import express from 'express'
import sendEmailController from '../controllers/sendEmailController.js'

const router = express.Router()

// router.post('/contact', sendEmailController)
router.get('/contact', sendEmailController)
export default router