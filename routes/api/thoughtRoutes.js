const router = require('express').Router();
const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);
router.route('/:id/reactions').put(createReaction).delete(deleteReaction);

module.exports = router;