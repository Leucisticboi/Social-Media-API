require('dotenv').config();
const { connect, connection } = require('mongoose');

connect(process.env.MONGODB_URL);

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

module.exports = connection;