const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 3000;

app.get((req, res) => {
    res.send({
        success: true,
        message: 'Hey there',
        timestamp: moment().format()
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});