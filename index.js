const nodemailer = require('nodemailer');
require('dotenv').config();

// transporter
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'user@gmail.com',
		pass: process.env.PASS, // naturally, replace both with your real credentials or an application-specific password
	},
});

// mailOptions
const mailOptions = {
	from: 'sender@gmail.com',
	to: 'receiver@gmail.com',
	subject: 'Node Mailer Tester',
	text: `Hi,
        Anik,
        How are you? Hope so you are doing well. This mail is sent using nodemailer.

        Thank You
        Regards
        Anik Sarker`,
};

// send mail
transporter.sendMail(mailOptions, (info) => {
	try {
		console.log('Email sent: ' + info.response);
	} catch (error) {
		console.log(error);
	}
});
