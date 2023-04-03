const mongoose = require('mongoose');
const {Schema} = mongoose;

const gameSchema = new Schema({
    name: {type: String, required: true},
    icon: {type: String, required: true},
    banner: {type: String, required: true},
    images: [{type: String, required: true}],
    developers: [{type: String, required: true}],
    publishers: [{type: String, required: true}],
    genres: [{type: String, required: true}],
    consoles: [{type: String, required: true}],
    release_date: {type: String, required: true},
    post_date: {type: String, required: true},
    comments: [{
        user_uid: {type: String, required: false, default: null},
        user_name: {type: String, required: false, default: null},
        comment: {type: String, required: false, default: null},
        score: {type: Number, required: false, default: null},
        date: {type: String, required: false, default: null},
    }]
});

module.exports = mongoose.model('Game', gameSchema, 'games');
