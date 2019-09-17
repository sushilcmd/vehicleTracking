const router = require('express').Router();
const { trackVehical } = require('./vehicleTracking.Controller');

router.post('/track/:token', trackVehical);

module.exports = router;
