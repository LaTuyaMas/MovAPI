const Game = require('../models/game.model');

const gameCtrl = {};

gameCtrl.getGames = async (req, res) => {
    const games = await Game.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

gameCtrl.getGame = async (req, res) => {
    const game = await Game.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Game dont exist'})
        })
        .catch(err => console.log(err));
}

gameCtrl.addGame = async (req,res) => {
    const myGame = new Game(req.body);
    await myGame.save()
        .then(() =>
            res.json({status: 'Game inserted'}))
        .catch(err => res.send(err.message));
}

gameCtrl.updateGame = async (req, res) => {
    const game = req.body;
    await Game.findByIdAndUpdate(
        req.params.id,
        {$set: game},
        {new: true})
        .then((data) =>
        {

            if(data!=null) res.json({status: 'Game updated',data})
            else res.json({status: 'Game dont exist'})
        }).catch(err => res.send(err.message));
}

gameCtrl.deleteGame = async (req, res) => {
    await Game.findByIdAndDelete(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json({status: 'Game deleted'})
            else res.json({status: 'Game dont exist'})
        }).catch(err => res.send(err.message));
}

gameCtrl.getGenres = async (req,res) => {
    await Game.find().distinct('genres')
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

module.exports = gameCtrl;
