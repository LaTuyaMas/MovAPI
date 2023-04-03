const express = require('express');
const gameCtrl = require('../controllers/game.controller');
const router = express.Router();

router.get('/', gameCtrl.getGames);
router.get('/game/:id', gameCtrl.getGame);
router.post('/', gameCtrl.addGame);
router.put('/:id', gameCtrl.updateGame);
router.delete('/:id', gameCtrl.deleteGame);

router.get('/genres', gameCtrl.getGenres);

module.exports = router;
