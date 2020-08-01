"use strict";

class commonAccessPoint {
    constructor(){ }

    setRoutes(){
        this.commonEntryRoutes();
        const self = this;

        if(this.routesOverride){
            for(let route in this.routesOverride){
                const method    = this.routesOverride[route].method.toLowerCase();
                const callback  = this.routesOverride[route].callback;
                this.router.route(`${this.basePath}/${route}`)[method](function(){
                    const businessLogicInstance = new self.businessLogic(...arguments);
                    businessLogicInstance[callback](...arguments);
                });
            }
        }

        this.allowedVerbs.forEach((verb)=>{
            this[verb.toLowerCase()]();
        });

        this.rejects();
    }

    commonEntryRoutes(){
        this.router.route(`${this.basePath}*`)
            .all((req, res, next)=>{
                req.dome = {};
                res.dome = {};
                /* @TODO: Set request id */
                next();
            });
    }

    rejects(){
        this.router.route(`${this.basePath}*`)
            .all((req, res/*, next*/)=>{
                /* @TODO: Get response from custom factory*/
                /* @TODO: Check for method reject and other rejects*/
                res.status(500).json({
                    success: false,
                    data: {},
                    message: "Method Not Allowed",
                })
            });
    }

    get(){
        const self = this;
        this.router.route(`${this.basePath}`)
            .get(function(req, res){
                req.dome = {};
                res.dome = {};
                const businessLogicInstance = new self.businessLogic(...arguments);
                businessLogicInstance.get();
            });
    }

    post(){
        const self = this;
        this.router.route(`${this.basePath}`)
            .post(function(req, res){
                req.dome = {};
                res.dome = {};
                const businessLogicInstance = new self.businessLogic(...arguments);
                businessLogicInstance.post();
            });
    }

    put(){
        const self = this;
        this.router.route(`${this.basePath}`)
            .put(function(req, res){
                req.dome = {};
                res.dome = {};
                const businessLogicInstance = new self.businessLogic(...arguments);
                businessLogicInstance.put();
            });
    }

    delete(){
        const self = this;
        this.router.route(`${this.basePath}`)
            .delete(function(req, res){
                req.dome = {};
                res.dome = {};
                const businessLogicInstance = new self.businessLogic(...arguments);
                businessLogicInstance.delete();
            });
    }
}

module.exports = commonAccessPoint;
