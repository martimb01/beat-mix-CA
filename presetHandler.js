// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (method,indexArray, newPresetArray) => {
    if (indexArray<0 || indexArray>15 ) {

        return [404];

    } else if (method != 'PUT' &&  method != 'GET') {

        return [400];

    } else {
        if (method === 'GET') {
            return [200,presets[indexArray]]
        } else if (method === 'PUT') {
            presets[indexArray] = newPresetArray;
            return [200,newPresetArray];
        }
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
