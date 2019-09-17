const { getVehicleData, saveRecord } = require('./vehicleTracking.Service');
const { createResponse } = require('../../handler/createResponse');

const track = async function(token) {
    const { status, statusCode, msg, data } = await getVehicleData(token);
    if (!status) {
        throw [msg, statusCode, status]
    }
    await saveRecord(data);
    return data;
}

exports.trackVehical = async function(req, res) {
    try {
        const { token } = req["params"];
        let data = await track(token);
        let response = createResponse(["Vehicle data save successfully", "V200", true], data);
        res.json(response);
    } catch (error) {
        let response = createResponse(error);
        res.json(response);
    }
}