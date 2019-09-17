const router = require('express').Router();
const { distance } = require('./distance.Controller');
const { isValidNum } = require('./distance.Middleware');

router.get('/:registrationNumber', isValidNum, distance);

module.exports = router;