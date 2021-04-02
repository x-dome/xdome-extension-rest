"use strict";

class accessPoints {
    constructor(express, accessPointList){
        this.router                 = express.Router();
        this.accessPointList        = accessPointList;
    }

    setRoutes(){
        this.accessPointList.forEach((accessPoint)=>{
            let accessPointInstance = new (require(`./../modules/${accessPoint.name}/accessPoint`))(this.router);
            accessPointInstance.setRoutes();
        });
    }
}

module.exports = accessPoints;
