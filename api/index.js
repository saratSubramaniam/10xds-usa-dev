var nodemailer = require('nodemailer');
var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(cors());

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

app.post('/send', cors(), function (req, res) {
    var mailOptions = {
        from: 'sharathhtc@gmail.com',
        to: 'sarath.s@10xds.com',
        subject: 'Email from the ' + req.body.siteName + ' website',
        html: '<h3>Hello</h3><p>You have received an email from ' + req.body.name + ' with email ID <i>' + req.body.email + '</i> and the question is - <br>' + req.body.question + '</p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.end();
});