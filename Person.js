class Person{
    constructor(name){
        this.name = name;
    }
    addAddress(address){
        this.address = address;
    }
    getDetails(){
        return `Name is ${this.name}, Address is: ${this.address}`;
    }
}
module.exports = Person;