const { ipInfo, distanceBtw } = require('./distance.Service');
const { createResponse } = require('../../handler/createResponse');


const init = function(vehicleMeta, ip) {
    try {
        const { Lat, Long } = vehicleMeta;
        const { ll } = ipInfo(ip);
        let llINfo = {
            ll1: { lat: Lat, lon: Long },
            ll2: { lat: ll[0], lon: ll[1] }
        }
        const distance = distanceBtw(llINfo["ll1"], llINfo["ll2"]);
        return { distance, llINfo };
    } catch (error) {
        throw ["Something happen wrong. Please try again.", "IN500", false]
    }
}

exports.distance = async function(req, res) {
    try {
        const ip = req["host"];
        const vehicleMeta = req["vehicleMeta"]
        const data = init(vehicleMeta, "139.5.253.157")
        const response = createResponse([`Total distance is ${data["distance"]} KM`, "D200", true], data)
        res.json(response);
    } catch (error) {
        const response = createResponse(error);
        res.json(response);
    }
}