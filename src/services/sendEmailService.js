import AWS from 'aws-sdk'

const SES = new AWS.SES()

const senderEmail = process.env.SENDER_EMAIL
const recieverEmail = process.env.RECEIVER_EMAIL

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env. AWS_REGION
})


const handleSendEmail = () => {
  const params = {
    Source: senderEmail,
    Destination : {
      ToAddresses: [recieverEmail]
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `This message has been sent from HTML ${senderEmail}`
        },
        Text: {
          Charset: 'UTF-8',
          Data: `This message sent from TEXT ${senderEmail}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `This SUBJECT THIS WORKS! has been sent from  ${senderEmail}`
      }
    }
  }

  SES.sendEmail(params, (err, data) => {
      if(err) {
      console.log('this is error', err)
      } else {
      console.log('email sent message id', data.MessageId)
      }
    })
}


export default {
  handleSendEmail: handleSendEmail()
}