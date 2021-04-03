"use strict";

module.exports = `
"use strict";

const commonAccessPoint     = require("@x-dome/xdome-extension-rest").support.accessPoint;

class {className} extends commonAccessPoint{
    constructor(router){
        super();
        this.basePath       = {route};
        this.router         = router;
        this.allowedVerbs   = {verbs};
        this.businessLogic  = require("./businessLogic");
    }
}

module.exports = {className};
`;
