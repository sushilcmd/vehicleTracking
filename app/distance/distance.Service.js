const geoip = require('geoip-lite');
const geodist = require('geodist');

const { connection, Collection } = require('mongoose');
const vehicles = connection.collection('Vehicles');

/**
 * Get IP information like location, country, latitude longitude etc
 * @param {String} ip 
 */
const ipInfo = function(ip) {
    try {
        const geo = geoip.lookup(ip);
        return geo;
    } catch (error) {
        throw ["Something happen wrong. Please try again", "CL500", false]
    }
}

const distanceBtw = function(ll1, ll2) {
    try {
        return geodist(ll1, ll2, { exact: true, unit: 'km' })
    } catch (error) {
        throw ["Something happen wrong. Please try again", "DC500", false]
    }
}

const findLocationByRegNo = async function(reqNumber) {
    try {
        const vehicle = await vehicles.findOne({ VehicleNo: reqNumber });
        return vehicle;
    } catch (error) {
        throw ["Something happen wrong. Please try again", "M500", false]
    }
}

module.exports = {
    ipInfo,
    findLocationByRegNo,
    distanceBtw
}