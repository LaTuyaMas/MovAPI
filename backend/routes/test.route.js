const express = require('express');
const serieCtrl = require('../controllers/test.controller');
const router = express.Router();

router.get('/', serieCtrl.getTests);
router.get('/id/:id', serieCtrl.getTest);

module.exports = router;
