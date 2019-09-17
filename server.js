const express = require('express');
const app = express();
const morgan = require('morgan');
const { dbCon } = require('./config/dbCon');


const trackingRoutes = require('./app/tracking/vehicleTracking.Route');
const distanceRoutes = require('./app/distance/distance.Route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

let port = 5002;


app.use('/vehicle', trackingRoutes);
app.use('/distance', distanceRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.json({
        msg: "Route not found",
        status: false,
        statusCode: 404
    })
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    let status = err.status || 500;
    res.status(status).json({ statusCode: 500, status: false, error: "Internal Server Error" });
});

const listenApp = function() {
    app.listen(port, function(x) {
        console.log(`Server listen at :${port}`)
    });
}

dbCon().then(_ => listenApp()).catch(error => console.log(error))

module.exports = app;