const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager")

var team = [];

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

const buildEmployee = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name:'role',
      message: 'Select a role:'
      choices: ['Engineer', 'Intern']
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
    }
  ])
  .then(employeeInput => {
    let {name, id, email, role, github, school} = employeeInput
    let employee;

    if (role === "Engineer"){
      employee = new Engineer (name, id, email, github)
    } else if (role === "Intern"){
      employee = new Intern (name, id, email, school)
      
    }
  }
}

buildManager()
.then(buildEmployee)
