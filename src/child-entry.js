class ChildEntry {
    constructor(FirstName, LastName, NickName, ParentId) {
        this.firstName = FirstName;
        this.lastName = LastName;
        this.nickName = NickName;
        this.parentId = ParentId;
    }
    
    get FirstName() { return this.firstName; }
    get LastName() { return this.lastName; }
    get NickName() { return this.nickName; }
    get ParentId() { return this.parentId; }
    
    set FirstName(FirstName) { this.firstName = FirstName; }
    set LastName(LastName) { this.lastName = LastName; }
    set NickName(NickName) { this.nickName = nickName; }
}