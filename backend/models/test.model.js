const mongoose = require('mongoose');
const {Schema} = mongoose;

const testSchema = new Schema({
    texto: [{type: String, required: true}],
    numero: {type: String, required: true}
});

module.exports = mongoose.model('Test', testSchema, 'test');
