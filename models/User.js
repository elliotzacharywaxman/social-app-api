const { Schema, model } = require('mongoose');

// Schema for what makes up a comment
const userSchema = new Schema({
    username: { type: String, required: true, trimmed: true, unique: true },
    email: { type: String, required: true, unique: true },
    // add that it must match a valid email
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},
    {
        toJSON: {
            // getters: true,
            virtuals: true
        }
    }
);

userSchema.virtual("friendCount")
    .get(function () {
        return this.friends.length
    })

// Initialize the Comment model
const User = model('user', userSchema);

module.exports = User;
