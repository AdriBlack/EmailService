import sendEmailService  from '../services/sendEmailService.js'


const sendEmailController = async (req, res, next) => {
    try {
        console.log('hello')
        await sendEmailService.handleSendEmail()
        console.log('goodbye')
        res.sendStatus(201)
        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

export default sendEmailController