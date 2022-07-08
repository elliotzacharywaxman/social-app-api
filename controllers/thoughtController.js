const { reactionSchema, Thought, User } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create a thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((post) =>
                !post
                    ? res
                        .status(404)
                        .json({ message: 'thought created, but no posts with this ID' })
                    : res.json({ message: 'thought created' })
            )
            .catch((err) => {
                console.error(err);
            });
    },
    // Add a reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true })
            .then((reaction) =>
                !reaction
                    ? res
                        .status(404)
                        .json({ message: 'thought created, but no posts with this ID' })
                    : res.json({ message: 'thought created' })
            )
            .catch((err) => {
                console.error(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((post) =>
                !post
                    ? res
                        .status(404)
                        .json({ message: 'thought created, but no posts with this ID' })
                    : res.json({ message: 'thought created' })
            )
            .catch((err) => {
                console.error(err);
            });
    },
};

module.exports = thoughtController