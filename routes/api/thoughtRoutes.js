const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    addReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought)

router.route("/:thoughtId/reactions").post(addReaction)

module.exports = router;