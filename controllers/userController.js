const { reactionSchema, User, Thought } = require('../models');

const userController = {
    getUsers(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create a user
    createUser(req, res) {
        User.create(req.body)
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'user created, but no posts with this ID' })
                    : res.json({ message: 'user created' })
            )
            .catch((err) => {
                console.error(err);
            });
    },
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'friend added, but no posts with this ID' })
                    : res.json({ message: 'friend added' })
            )
            .catch((err) => {
                console.error(err);
            });
    },
    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'friend removed, but no posts with this ID' })
                    : res.json({ message: 'friend removed' })
            )
            .catch((err) => {
                console.error(err);
            });
    }
};

module.exports = userController