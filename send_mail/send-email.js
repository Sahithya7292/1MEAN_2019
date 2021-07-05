var nodemailer = require('nodemailer');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mnikitha123054@stanley.edu.in',
    pass: 'nikitha 17'
  }
});

var mailOptions = {
  from: 'mnikitha123054@stanley.edu.in',
  to: 'varsha5592@gmail.com, bindu8829@gmail.com ',
  subject: 'Hai From Node JS',
  text: `Hello Mams, 
      Let us take a break`,
  //html: '<h1>Hello</h1><p>nikitha</p>'
	  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}
);
