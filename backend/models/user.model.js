const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    alias: {type: String, required: true},
    pfp: {type: String, required: true},
    comments: [{
        game_uid: {type: String, required: false, default: null},
        game_name: {type: String, required: false, default: null},
        game_icon: {type: String, required: false, default: null},
        comment: {type: String, required: false, default: null},
        score: {type: Number, required: false, default: null},
        date: {type: String, required: false, default: null},
    }]
});

module.exports = mongoose.model('User', userSchema, 'users');
