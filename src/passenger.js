export class Passenger {
    constructor(FirstName, LastName, NickName) {
        this.firstName = FirstName;
        this.lastName = LastName;
        this.nickName = NickName;
    }
    get FirstName() { return this.firstName; }
    get LastName() { return this.lastName; }
    get NickName() { return this.nickName; }
    get IsPickedUp() { return this.isPickedUp; }
    get IsDroppedOff() { return this.isDroppedOff; }
    set FirstName(FirstName) { this.firstName = FirstName; }
    set LastName(LastName) { this.lastName = LastName; }
    set NickName(NickName) { this.nickName = nickName; }
    set IsPickedUp(IsPickedUp) { this.isPickedUp = IsPickedUp; }
    set IsDroppedOff(IsDroppedOff) { this.isDroppedOff = IsDroppedOff; }
}