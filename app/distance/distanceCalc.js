exports.distance = function(llMeta) {
    const { lat1, lat2, lon1, lon2 } = llMeta;
    const R = 6371e3; // metres

    // const φ1 = lat1.toRadians();
    // const φ2 = lat2.toRadians();

    const latDelta = (lat1.toRadians() - lat2.toRadians()).toRadians();

    const lonDelta = (lon1 - lon2).toRadians();

    // const Δφ = (lat2 - lat1).toRadians();
    // const Δλ = (lon2 - lon1).toRadians();

    const a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
        Math.cos(lat1.toRadians) * Math.cos(lat2.toRadians()) *
        Math.sin(lonDelta / 2) * Math.sin(lonDelta / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    console.log(d);
    return d;
}