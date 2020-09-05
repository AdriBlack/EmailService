
// Load the SDK and UUID
const AWS = require('aws-sdk');
// const uuid = require('node-uuid');


// Create an SES service
const SES =  new AWS.SES({
  region: 'us-west-2'
})

const senderEmail = 'adrianablackb@gmail.com'
const recieverEmail = 'adrianablackb@gmail.com'

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
          Data: `This message has heyyyyy sexy berto been sent from TEXT ${senderEmail}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `This SUBJECT NEW APP has been sent from  ${senderEmail}`
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

handleSendEmail()

// console.log(process.env)