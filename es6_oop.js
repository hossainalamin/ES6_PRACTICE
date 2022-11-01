class BaseClass{
    constructor()
    {
        this.fatherName = "Md Ala Uddin"
        this.motherName = "Nahida Begum";
    }
    getFullInfo()
    {
        return `${this.fatherName} ${this.motherName}` 
    }
}
class ChildClass extends BaseClass{ 
    constructor()
    {
        super();  
        this.age = 20;
    }
}
var childObj = new ChildClass();
var getInfo = childObj.getFullInfo();
console.log(childObj);
console.log(getInfo);