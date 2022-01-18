//Requiring dependancies
const inquirer = require("inquirer");
const fs = require("fs");

//Requiring classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const buildCard = require("./src/cardBuilder.js");



var team= [];
var manager;

//Manager prompt
const buildManager = () => {
 return inquirer.prompt ([
    {
      type: 'input',
      name:'name',
      message: 'Team Manager name:'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Manager ID number:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Manager email address:'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Manager office number:'
    },

  ])
  .then (managerData => {
    const { name, id, email, officeNumber} = managerData;
    var manager = new Manager (name, id, email, officeNumber);

    team.push(manager)
    return manager
  })
}; 
//Employee prompt
const buildEmployee = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name:'role',
      message: 'Select a role:',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID #:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee email address:'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Interns School:',
      when: (input) => input.role === "Intern"
    },
    {
      type: 'input',
      name: 'username',
      message: 'Engineers GitHub useranme:',
      when: (input) => input.role === "Engineer"
    },
    {
      type: 'confirm',
      name: 'addMore',
      message: 'Would you like to add more employees?'
    }
  ])
  .then(employeeInput => {
    const {name, id, email, role, github, school, addMore} = employeeInput
    let employee;

    if (role === "Engineer"){
      employee = new Engineer (name, id, email, github)
    } else if (role === "Intern"){
      employee = new Intern (name, id, email, school)
    }
    team.push(employee);

    if (addMore){
      return buildEmployee(team);
    }
    else {
      console.log(team)
      return team;
    }
    
    
  })

};

function buildHtml() {
  buildCard(manager);
  writeHtml(buildCard);

   
};

const writeHtml = (data) => {
  return fs.writeFileSync("./dist/index.html", data, err => {
    if (err){
      console.log(console.log(err))
    } else {console.log('success!')}
  })
}

function init (){
buildManager()
.then(buildEmployee)
.then(buildHtml)
.catch(err => {
    console.log(err);
  
})

}


init();
module.exports = team;

// const writeFile = fs.writeFile('./dist', index.html')

