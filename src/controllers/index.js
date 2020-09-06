// import sendEmailController from './sendEmailController'
// export default sendEmailController
const { sendEmailService } = require('../services')
const { handleSendEmail } = sendEmailService

const sendEmailController = async (req, res, next) => {
    try {
        console.log('hello')
        // await handleSendEmail()
        // res.sendStatus(201)
        // next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

module.exports = {
    sendEmailController
}