const merge = require('deepmerge');

const json = (rsp, data) => {
    const stringData = JSON.stringify(data);
    return merge(rsp, ({
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': stringData.length
        },
        body: stringData
    }))
};

module.exports = json;