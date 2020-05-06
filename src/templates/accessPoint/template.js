/* eslint-disable strict, no-unused-vars, no-undef */
let template = `
"use strict";

const commonAccessPoint     = require("xdome-extension-rest").support.accessPoint;

class test extends commonAccessPoint{
    constructor(router){
        super();
        this.basePath       = ${route};
        this.router         = router;
        this.allowedVerbs   = ${verbs};
        this.businessLogic  = require("./businessLogic");
    }
}

module.exports = test;
`;
/* eslint-enable strict, no-unused-vars, no-undef */
