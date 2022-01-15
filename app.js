//Requiring dependancies
const inquirer = require("inquirer");
const fs = require("fs");

//Requiring classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
var team = [];

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
    const manager = new Manager (name, id, email, officeNumber);

    team.push (manager);
    console.log(manager);
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
  ])
  .then(employeeInput => {
    let {name, id, email, role, github, school,} = employeeInput
    let employee;

    if (role === "Engineer"){
      employee = new Engineer (name, id, email, github)
    } else if (role === "Intern"){
      employee = new Intern (name, id, email, school)
    }
    team.push(Employee);
  })
};
console.log(Employee);

buildManager()
.then(buildEmployee)

// const writeFile = fs.writeFile('./dist', index.html')