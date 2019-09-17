const axios = require('axios');
const { vehicleModel } = require('./vehicleTracking.Model');

/**
 * Get vehicle data from url using token
 * @param {String} token 
 */
const getVehicleData = async function(token) {
    try {
        const url = `http://vehicletrack.biz/api/companyvehiclelatestinfo?token=${token}`;
        const { data } = await axios.get(url);
        if (!data["Vehicle"]) {
            return {
                msg: "Too Frequent calling,Service should be called after given interval limit",
                status: false,
                statusCode: "TL400"
            }
        }
        return {
            msg: "All vehicle list",
            status: true,
            statusCode: "V200",
            data: data["Vehicle"]
        }
    } catch (error) {
        throw ["Something happen wrong. Please try again", "BR500", false];
    }
}

/**
 * Save data into database
 * @param {Array} meta 
 */
const saveRecord = async function(meta) {
    try {
        await vehicleModel.collection.insert(meta);
        return true;
    } catch (error) {
        throw ["Something happen wrong. Please try again", "M500", false];
    }
}

module.exports = {
    getVehicleData,
    saveRecord
}