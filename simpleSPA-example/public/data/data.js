"use strict";

function requester(url) {
    return new Promise((resolve, reject) => {
        $.getJSON(url, (data, err) => {
            resolve(data);
            reject(err);
        });
    });
}

class Data {
    getAll(url) {
        return requester(url);
    }
}

let data = new Data();
export {
    data
}