import {Passenger} from "./Passenger";
//import {fs} from 'C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\fs';
//import * as fs from 'fs';
//var fs = require('C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\fs');

export class PassengerList {
    constructor() {
        this.passengerList = [
            {
            FirstName: "Jeffrey",
            LastName: "Coldwen",
            IsPickedUp: false,
            IsDroppedOff: false
            },
            {
            FirstName: "Howard",
            LastName: "Balmer",
            IsPickedUp: false,
            IsDroppedOff: false
            },
            {
            FirstName: "Jennifer",
            LastName: "Hamming",
            IsPickedUp: false,
            IsDroppedOff: false
            },
            {
            FirstName: "Tod",
            LastName: "Berrignton",
            IsPickedUp: false,
            IsDroppedOff: false
            },
            {
            FirstName: "Nick",
            LastName: "Carter",
            IsPickedUp: false,
            IsDroppedOff: false
            }
        ];
        // fs.readFile('../test_data/PassengerList.json', 'utf8', function(err, data) {
        //     if (err) throw err;
        //     this.passengerList = JSON.parse(data);
        // })
    }
    get PassengerList() { return this.passengerList; }
}