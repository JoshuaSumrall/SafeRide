export class Parent {
    constructor(ParentId)
    {
        this.parentId = ParentId;
        this.firstName = "";
        this.lastName = "";
        this.children = new Array();
    }

    get ParentId() { return this.parentId; }
    get FirstName() { return this.firstName; }
    get LastName() { return this.lastName; }
    get Children() { return this.children; }

    set FirstName(FirstName) { this.firstName = FirstName; }
    set LastName(LastName) { this.lastName = LastName; }
}