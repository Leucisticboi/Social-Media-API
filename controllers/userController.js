const { User } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id }).populate('thoughts');

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      };

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { 
          username: req.body.username,
          email: req.body.email,
        },
        { new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      };

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete({ _id: req.params.id });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      res.status(200).json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const user = await User.findById(req.params.id);
      const friend = await User.findById(req.body.id);

      if (!user) {
        res.status(404).json({ message: 'No user with that id' });
      };

      user.friends.push(friend);

      await user.save();

      res.status(200).json(user.friends);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const user = await User.findById(req.params.id);
      const friendToDelete = req.body.id;

      user.friends = user.friends.filter(friend => friend._id != friendToDelete);

      await user.save();

      res.status(200).json(user);      
    } catch (err) {
      res.status(500).json(err);
    }
  }
};