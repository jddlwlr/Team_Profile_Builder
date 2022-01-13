const inquirer = require("inquirer");
const Employee = require("./lib/Employee");


let Employee = new Employee (name, id, email);

const questions = const questions =[
    {
      type: 'input',
      name: 'Name',
      message: 'Name:',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'Write a description of this project',
    },
    {
        type: 'input',
        name: 'Built With',
        message: 'What did you use to build this project?',
      },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project:',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How is this application used? Be descriptive:',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List resources used and additional contributors:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licence would you like to use?',
        choices: ['MIT','Apache 2.0','GNU GPL 3.0']
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What tests can be run?',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'Link to repository:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your email address:',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Your gitHub username:',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Ways to contribute:',
      },
      {
        type: 'input',
        name: 'deployed',
        message: 'link to deployed application:',
      },
    ];