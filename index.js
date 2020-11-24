const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 3000;

var CronJob = require('cron').CronJob;

var job = new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

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