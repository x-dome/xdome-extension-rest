"use strict";

const path                  = require('path');
const accessPointExtends    = require('./support/accessPoints');
const accessPointPlugin     = require('./plugin/accessPoints');

module.exports          = {
    templates           : {
        accessPoint     : path.join(__dirname, 'templates'),
    },
    support             : {
        accessPoint     : accessPointExtends,
    },
    plugin              : {
        accessPoint     : accessPointPlugin,
    },
};
