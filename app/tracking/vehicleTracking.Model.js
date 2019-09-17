const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    vehicleId: mongoose.Types.ObjectId,
    Angle: String,
    Date: String,
    Ignition: String,
    Imei: String,
    Lat: String,
    Location: String,
    Long: String,
    Speed: String,
    Tempr: String,
    VehicleNo: String
});

exports.vehicleModel = mongoose.model('Vehicle', vehicleSchema, 'Vehicles');