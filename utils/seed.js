const { userSeedData, thoughtSeedData } = require('./data');
const { User, Thought } = require('../models');
const connection = require('../config/connection');

connection.on('error', (err) => err);

connection.once('open', async () => {
  try {
    await connection.dropCollection('users');
    await connection.dropCollection('thoughts');

    await User.insertMany(userSeedData);

    await Thought.insertMany(thoughtSeedData);

    const createdThoughts = await Thought.find();

    for (let thought of createdThoughts) {
      const user = await User.findOne({ username: thought.username });
      
      if (!user) {
        console.error('User not found for username:', thought.username);
        continue;
      }
    
      user.thoughts.push(thought._id);
      await user.save();
    }

    console.log('Seed data inserted successfully');
  } catch (err) {
    console.error('Error inserting seed data:', err);
  } finally {
    console.log(userSeedData, thoughtSeedData);
    process.exit(0);
  }
});