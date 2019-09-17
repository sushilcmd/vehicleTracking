exports.createResponse = function(meta, data) {
    const response = {
        msg: meta[0] || "",
        statusCode: meta[1] || "",
        status: meta[2] || false,
        data
    }
    if (!data) {
        delete response["data"]
    }
    return response;
}