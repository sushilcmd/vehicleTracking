const router = require('express').Router();
const { trackVehical } = require('./vehicleTracking.Controller');

router.get('/track/:token', trackVehical);

module.exports = router;