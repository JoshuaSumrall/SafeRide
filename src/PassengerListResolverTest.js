import {resolver} from "aurelia-framework";
import {Passenger} from "./Passenger";

export class PassengerListResolverTest
{
   get(container, key) {
       console.log("Resolver called");
        var passengerList = new Array();
        passengerList.push(new Passenger("Jeffrey","Coldwen",""));
        passengerList.push(new Passenger("Howard","Balmer",""));
        passengerList.push(new Passenger("Jennifer","Hamming",""));
        passengerList.push(new Passenger("Tod","Berrington",""));
        passengerList.push(new Passenger("Nick","Carter",""));

        return passengerList;
   }
}