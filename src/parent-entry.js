import {Parent} from "./parent";

export class ParentEntry {
    static inject() { return ["ParentId","ParentEntryCallback"]; }

    constructor(ParentId, Callback)
    {
        console.log("ParentEntry hit with ParentId: " + ParentId);
        this.parent = new Parent(ParentId);
        this.callback = Callback;
    }

    get ParentId() { return this.parent.parentId; }
    get FirstName() { return this.parent.firstName; }
    get FirstNameIsValid() { return this.firstNameIsValid; }
    get FirstNameValidationMessage() { return this.firstNameValidationMessage; }
    get LastName() { return this.parent.lastName; }
    get LastNameIsValid() { return this.lastNameIsValid; }
    get LastNameIsValidationMessage() { return this.lastNameIsValidationMessage; }

    set FirstName(FirstName) { this.parent.firstName = FirstName; }
    set LastName(LastName) { this.parent.lastName = LastName; }

    validate() {
        let isFormValid = true;
        this.firstNameIsValid = true;
        this.lastNameIsValid = true;

        if (this.parent.firstName == "" || this.parent.firstName === undefined) 
        { 
            this.firstNameIsValid = false;
            this.firstNameValidationMessage = "Please enter a first name";
            isFormValid = false;
        }
        if (this.parent.lastName == "" || this.parent.lastName === undefined) 
        { 
            this.lastNameIsValid = false;
            this.lastNameValidationMessage = "Please enter a last name";
            isFormValid = false;
        }

        return isFormValid;
    }

    submit() {
        if(this.validate())
        {
            this.callback(this.parent);
        }
    }
}