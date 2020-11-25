const express = require('express');
const moment = require('moment');
const fetch = require('node-fetch');
const CronJob = require('cron').CronJob;

const app = express();
const PORT = process.env.PORT || 3000;

const job = new CronJob('0 */1 * * * *', function() {
  fetch('https://heroku-time-test.herokuapp.com/')
    .then(res => res.text())
    .then(body => console.log(body));
}, null, true, 'Asia/Kolkata');

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'Hey there',
        timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    job.start();
});