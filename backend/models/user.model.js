const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    uid: {type: String, required: true},
    alias: {type: String, required: true},
    pfp: {type: String, required: true},
    comments: [{
        game_uid: {type: String, required: false, default: null},
        game_name: {type: String, required: false, default: null},
        game_icon: {type: String, required: false, default: null},
        comment: {type: String, required: false, default: null},
        score: {type: Number, required: false, default: null},
        date: {
            day: {type: Number, required: false, default: null},
            month: {type: Number, required: false, default: null},
            year: {type: Number, required: false, default: null}
        },
    }]
});

module.exports = mongoose.model('User', userSchema, 'users');
