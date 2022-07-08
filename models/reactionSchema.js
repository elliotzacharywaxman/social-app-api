const { Schema, Types } = require('mongoose');
const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    createdAt: { type: Date, default: Date.now, get: timeStamp => formatDate(timeStamp) },
    userName: { type: String, required: true },
    reactionBody: { type: String, required: true, maxlength: 280 },
},
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);
module.exports = reactionSchema