const mongoose = require('mongoose');

const URI = 'mongodb+srv://progresa:progresa@cluster0.dscasnc.mongodb.net/ProyectoFinal';

mongoose.connect(URI)
    .then(db => console.log('DataBase Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;
