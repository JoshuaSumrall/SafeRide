import {Passenger} from "./Passenger";
//import {fs} from 'C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\fs';
//import * as fs from 'fs';
//var fs = require('C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\fs');

export class PassengerList {
    static inject() { return ["PassengerListArray"];}
    constructor(array) {
        this.passengerList = array;
        console.log(this.passengerList.length);
    }
    get PassengerList() { return this.passengerList; }

    // Record pickup time.
    RecordPickup(PassengerClicked) {
        PassengerClicked.PickupDate = new Date();
    }

    // Record dropoff time.
    RecordDropoff(PassengerClicked) {
        PassengerClicked.DropoffDate = new Date();
    }
}