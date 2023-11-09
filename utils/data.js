const userSeedData = [
  {
    username: 'john_doe',
    email: 'john@example.com',
  },
  {
    username: 'jane_doe',
    email: 'jane@example.com',
  },
  {
    username: 'alex_smith',
    email: 'alex@example.com',
  },
  {
    username: 'emma_jones',
    email: 'emma@example.com',
  },
];

const thoughtSeedData = [
  {
    thoughtText: 'This is a sample thought.',
    username: 'john_doe',
    reactions: [
      { reactionBody: 'Great thought!', username: 'jane_doe' },
      { reactionBody: 'Interesting!', username: 'alex_smith' },
    ],
  },
  {
    thoughtText: 'Another thought to seed.',
    username: 'jane_doe',
    reactions: [
      { reactionBody: 'I agree!', username: 'john_doe' },
      { reactionBody: 'Nice one!', username: 'emma_jones' },
    ],
  },
  {
    thoughtText: 'Seed data is fun!',
    username: 'alex_smith',
    reactions: [
      { reactionBody: 'Absolutely!', username: 'emma_jones' },
    ],
  },
  {
    thoughtText: 'Let\'s keep seeding thoughts!',
    username: 'emma_jones',
  },
];

module.exports = { userSeedData, thoughtSeedData };