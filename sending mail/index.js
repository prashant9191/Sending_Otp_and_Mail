// User NodeMailer
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:"587",
    auth: {
        user: 'vivian.robel78@ethereal.email',
        pass: '24U7qsEPepktYH1YTk'
    }
});

transporter.sendMail({
    to:"vivian.robel78@ethereal.email",
    form:"talkprashant9@gmail.com",
    subject : "GOT A JOB",
    text : "Hello From Node js",
    html:"<h6>THANK YOU</h6>"
})
.then(()=>{
    console.log("Email send success")
})
.catch((err)=>{
    console.log(err)
})

// With Send Grid

// require("dotenv").config();
// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.mailAPI);

// const msg = [{
//     to: 'talkprashant9@gmail.com',
//     from: 'talkprashant9@gmail.com', // Use the email address or domain you verified above
//     subject: 'Send GRID Testing',
//     text: 'Thank You',
//     html: '<strong>Ho gya Maja aya gya BRO</strong>',
//   },
//   {
//     to: 'talkprashant9@gmail.com',
//     from: 'talkprashant9@gmail.com', // Use the email address or domain you verified above
//     subject: '2 Mail Ek sath',
//     text: 'Sahi Hai yeh To',
//     html: '<strong>Ho gya Maja aya gya BRO</strong>',
//   }
// ];


//   sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });