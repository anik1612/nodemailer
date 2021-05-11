const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'stylishas1612@gmail.com',
		pass: process.env.PASS, // naturally, replace both with your real credentials or an application-specific password
	},
});

const mailOptions = {
	from: 'stylishas1612@gmail.com',
	to: 'aniksarker1612@gmail.com',
	subject: 'Node Mailer Tester',
	text: `Hi,
        Anik,
        How are you? Hope so you are doing well. This mail is sent using nodemailer.

        Thank You
        Regards
        Anik Sarker`,
};

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});
