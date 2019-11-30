const header = require("./header");

const json = "application/json";
module.exports = event => {
    const contentType = header("Content-Type") || json;
    return contentType === json ? JSON.parse(event.body) : null
};