import {Passenger} from "./Passenger";
//import {fs} from 'C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\fs';
//import * as fs from 'fs';
//var fs = require('C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\fs');

export class PassengerList {
    constructor() {
        this.passengerList = new Array();
        this.passengerList.push(new Passenger("Jeffrey","Coldwen",""));
        this.passengerList.push(new Passenger("Howard","Balmer",""));
        this.passengerList.push(new Passenger("Jennifer","Hamming",""));
        this.passengerList.push(new Passenger("Tod","Berrington",""));
        this.passengerList.push(new Passenger("Nick","Carter",""));
        // fs.readFile('../test_data/PassengerList.json', 'utf8', function(err, data) {
        //     if (err) throw err;
        //     this.passengerList = JSON.parse(data);
        // })
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