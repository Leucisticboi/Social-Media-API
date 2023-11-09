const { User, Thought } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findById({ _id: req.params.id });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const thoughtUser = await User.findOne({ username: req.body.username });

      thoughtUser.friends.push(newThought._id);

      res.status(200).json(newThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.id,
        { 
          thoughtText: req.body.text,
          username: req.body.username
        },
        { new: true }
      );

      if(!updatedThought) {
        res.status(404).json({ message: 'No thought with that id' });
      };

      res.status(200).json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thoughtToDelete = await Thought.findByIdAndDelete(req.params.id);
      const thoughtUser = await User.findOne({ username: thought.username });

      thoughtUser.thoughts = thoughtUser.thoughts.filter(userThought => userThought._id != req.params.id);
      await thoughtUser.save();

      if (!thoughtToDelete) {
        res.status(404).json({ message: 'No thought with that id' });
      };

      res.status(200).json({ message: 'Thought deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createReaction(req, res) {
    try {
      const { reactionBody, username } = req.body;

      const thought = await Thought.findById(req.params.id);

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that id' });
      };

      const newReaction = {
        reactionBody,
        username,
      };

      thought.reactions.push(newReaction);

      await thought.save();

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const { thoughtId, reactionId } = req.body;

      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        res.status(404).json({ message: 'No thought with that id' });
      }

      thought.reactions = thought.reactions.filter(reaction => reaction._id != reactionId);

      await thought.save();

      return res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};