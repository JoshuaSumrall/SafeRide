import environment from './environment';
import {PassengerListResolverTest} from "./PassengerListResolverTest";
import {Passenger} from './Passenger';
import {Parent} from './parent';

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

    let parentEntryCallback = function() {
      let parentDatabase = new ParentDatabase();
      return function(parent)
      {
        parentDatabase.RecordNewParent(parent);
        console.log("Recorded new parent: " + parent.FirstName + " " + parent.LastName);
        // Navigate to parent view
      }      
    }

    aurelia.use.developmentLogging();
    aurelia.container.registerInstance("PassengerListArray", passengerList);
    aurelia.container.registerHandler("ParentId", GetNewParentId);    
    aurelia.container.registerInstance("ParentEntryCallback", parentEntryCallback());
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot('parent-entry'));  
}

export function GetNewParentId()
{
  if (GetNewParentId.lastParentId === undefined) { GetNewParentId.lastParentId = 1; }
  return GetNewParentId.lastParentId++;
}

class ParentDatabase {
  constructor()
  {
    this.parents = new Array();
  }

  get Parents() { return this.parents; }

  RecordNewParent(Parent)
  {
    this.parents.push(Parent);
  }
}

function ParentEntryCallback(parent) {
  ParentDatabase.RecordNewParent(parent);
  console.log("Recorded new parent: " + parent.FirstName + " " + parent.LastName);
  // Navigate to parent view
}
