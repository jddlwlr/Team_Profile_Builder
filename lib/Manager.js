// In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'

class Manager extends Employee{
    constructor (name, id, email, officeNumber){

        super (name, id, email);
    
        this.officeNumber = officeNumber;
        }
        getRole() {
            return "Manager"
        }
};
//to be exported
module.exports = Manager;