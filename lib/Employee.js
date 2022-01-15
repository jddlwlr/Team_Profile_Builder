
// Employee Constructor

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //Returns name from input
    getName () {
      return this.name;
      }
    //returns ID from input
    getId (){
        return this.id;
    }
    //returns email from input
    getEmail() {
        return this.email;
      }
      //returns employee role
    getRole() {
            return 'Employee';
      }

};
//to be exported
module.exports = Employee;
