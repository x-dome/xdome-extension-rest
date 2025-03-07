"use strict";

module.exports = `
"use strict";

const businessLogic     = require("@x-dome/xdome-extension-rest").support.businessLogic;

class {className} extends businessLogic{
    constructor(req, res, next){
        super(...arguments);

        this.request    = req;
        this.response   = res;
        this.next       = next;
    }
}

module.exports = {className};
`;
