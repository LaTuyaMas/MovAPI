const Test = require('../models/test.model');

const testCtrl = {};

testCtrl.getTests = async (req, res) => {
    const tests = await Test.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

testCtrl.getTest = async (req, res) => {
    const test = await Test.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Test doesnt exist'})
        })
        .catch(err => console.log(err));
}

module.exports = testCtrl;
