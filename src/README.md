# **Team Profile Builder** 

## About / Synopsis

* Node.js command line application that uses the inquirer package to query the user about their team.
* Uses input to generate a nicely styled HTML page dispaying information about the team.
* Utilizes a sweet of tests and Jest to insure functionality across the application. 

## Usage

This application is run through the command line using node.js 
<br>

* Simply type node.js index.js in the command line to start he prompts
 
  <br>
  <br>

<!-- ![Site overview image](https://github.com/jddlwlr/workday_schedule_utility/blob/main/assets/SiteImage.png?raw=true) -->

### Features

* Inquirer prompts collect all pertinant data
* The HTML page is generated with individual cards for each team member
* Automated page generation -- makes the process simple
* Choose details for a Manager, as well as Engineers and Interns.
<br>
<br>

## Tests

A suite of tests has been designed to validate the functionality of each process in the code. The test are included in the repository and can be initiated by calling 'npm run tests' in the terminal.  

## Code

This application uses Node.js, with the Inquirer library to prompt the user. Each employee is created in its own module/class that extend the parent 'Employee' class. FS is used to write the generated HTML to a new file Index.html. Bulma is used for styling and screen compatability.  

### Limitations

The main limitations of this application are the limited roles available, a larger set of classes is required to expand the role selection options. Styling options are not available at this time. 

## With Thanks to

Google, Bulma, youtube and you. 

## License

Copywritten by me Jesse Lawler (2021)

## About Jesse Lawler

Jesse Lawler is a Geologist turned aspiring web developer currently enrolled in the Georgia institure of Technologies online full-stack web development course. Jesse like fishing, skiing and _long_ walks on the beach. 
