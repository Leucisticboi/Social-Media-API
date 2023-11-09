require('dotenv').config();
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`SERVER FOR SOCIAL MEDIA API RUNNING ON PORT ${PORT}`);
    });
});