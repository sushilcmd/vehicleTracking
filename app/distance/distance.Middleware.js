const { findLocationByRegNo } = require('./distance.Service');
const { createResponse } = require('../../handler/createResponse');

exports.isValidNum = async function(req, res, next) {
    try {
        const { registrationNumber } = req["params"];
        const vehicle = await findLocationByRegNo(registrationNumber);
        if (!vehicle) {
            throw ["Invalid Vehicle registration number", "V500", false]
        }
        req["vehicleMeta"] = vehicle;
        next();

    } catch (error) {
        let response = createResponse(error)
        res.json(response);

    }
}