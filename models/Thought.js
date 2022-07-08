const { format } = require('express/lib/response');
const { Schema, model } = require('mongoose');
const formatDate = require("../utils/helpers")
const reactionSchema = require("./reactionSchema")

// Schema for what makes up a comment
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    // add validation (Must be between 1 and 280 characters)
    createdAt: { type: Date, default: Date.now, get: timeStamp => formatDate(timeStamp) },
    // Use a getter method to format the timestamp on query
    userName: { type: String, required: true },
    reactions: [reactionSchema]
    // add that it must match a valid email
},
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

thoughtSchema.virtual("reactionCount")
    .get(function () {
        return this.reactions.length
    })

// Initialize the Comment model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
