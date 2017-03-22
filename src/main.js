import environment from './environment';
import {PassengerListResolverTest} from "./PassengerListResolverTest";
import {Passenger} from './Passenger';

//Configure Bluebird Promises.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .developmentLogging();

  if (environment.debug) {
    let passengerList = new Array();
        passengerList.push(new Passenger("Jeffrey","Coldwen",""));
        passengerList.push(new Passenger("Howard","Balmer",""));
        passengerList.push(new Passenger("Jennifer","Hamming",""));
        passengerList.push(new Passenger("Tod","Berrington",""));
        passengerList.push(new Passenger("Nick","Carter",""));
    aurelia.use.developmentLogging();
    aurelia.container.registerInstance("PassengerListArray", passengerList);
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot('passenger-list'));  
}
