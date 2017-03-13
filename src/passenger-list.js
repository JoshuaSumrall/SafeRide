import {Passenger} from "./Passenger";
//import {fs} from 'C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\fs';
//import * as fs from 'fs';
//var fs = require('C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\fs');

export class PassengerList {
    constructor() {
        this.PassengerList = [
            {
            FirstName: "Jeffrey",
            LastName: "Coldwen"
            },
            {
            FirstName: "Howard",
            LastName: "Balmer"
            },
            {
            FirstName: "Jennifer",
            LastName: "Hamming"
            },
            {
            FirstName: "Tod",
            LastName: "Berrignton"
            },
            {
            FirstName: "Nick",
            LastName: "Carter"
            }
        ];
        // fs.readFile('../test_data/PassengerList.json', 'utf8', function(err, data) {
        //     if (err) throw err;
        //     this.passengerList = JSON.parse(data);
        // })
    }
    get PassengerList() { return this.passengerList; }
}