const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {mongoose} = require('./database');
const {json} = require("express");
// mongoose.set('strictQuery', true);

// Settings
app.set('port', process.env.PORT || 3678);

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/test', require('./routes/test.route'));
app.use('/api/games', require('./routes/game.route'));
app.use('/api/users', require('./routes/user.route'));
app.use('/',(req, res) => res.send('TEST in /api/test, GAMES in /api/games, USERS in /api/users'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
})
