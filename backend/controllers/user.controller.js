const User = require('../models/user.model');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const users = await User.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'User dont exist'})
        })
        .catch(err => console.log(err));
}

userCtrl.addUser = async (req,res) => {
    const myUser = new User(req.body);
    await myUser.save()
        .then(() =>
            res.json({status: 'User inserted'}))
        .catch(err => res.send(err.message));
}

userCtrl.updateUser = async (req, res) => {
    const user = req.body;
    await User.findByIdAndUpdate(
        req.params.id,
        {$set: user},
        {new: true})
        .then((data) =>
        {

            if(data!=null) res.json({status: 'User updated',data})
            else res.json({status: 'User dont exist'})
        }).catch(err => res.send(err.message));
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json({status: 'User deleted'})
            else res.json({status: 'User dont exist'})
        }).catch(err => res.send(err.message));
}

module.exports = userCtrl;
