var nodemailer = require('nodemailer');
var express = require('express');
var app = express();

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sharathhtc@gmail.com',
        pass: 'kyyxqufnnrnlkeiy'
    }
});

var mailOptions = {
    from: 'sharathhtc@gmail.com',
    to: 'sarath.s@10xds.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

app.get('/send', function (req, res) {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.end();
});