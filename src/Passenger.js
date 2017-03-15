export class Passenger {
    constructor(FirstName, LastName, NickName) {
        this.firstName = FirstName;
        this.lastName = LastName;
        this.nickName = NickName;
        this.isPickedUp = false;
        this.isDroppedOff = false;
        this.pickupDate = {};
        this.dropoffDate = {};
    }
    
    get FirstName() { return this.firstName; }
    get LastName() { return this.lastName; }
    get NickName() { return this.nickName; }
    get IsPickedUp() { return this.isPickedUp; }
    get IsDroppedOff() { return this.isDroppedOff; }
    get PickupDate() { return this.pickupDate; }
    get DropoffDate() { return this.dropoffDate; }
    
    set FirstName(FirstName) { this.firstName = FirstName; }
    set LastName(LastName) { this.lastName = LastName; }
    set NickName(NickName) { this.nickName = nickName; }
    set IsPickedUp(IsPickedUp) { this.isPickedUp = IsPickedUp; }
    set IsDroppedOff(IsDroppedOff) { this.isDroppedOff = IsDroppedOff; }
    set PickupDate(PickupDate) { this.pickupDate = PickupDate; }
    set DropoffDate(DropoffDate) { this.dropoffDate = DropoffDate; }
}

