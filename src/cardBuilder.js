// const Employee = require("../lib/Employee");
// const Manager = require("../lib/Manager");
// // const Intern = require("../lib/Intern");
// const Engineer = require("../lib/Engineer");
const App = require("../index.js")


 const buildCard = function (data) {
    return `        <div class="column">
    <article class="message">
        <div class="message-header">
          <p>Name</p>
        </div>
        <div class="message-body">
          <strong>Role: ${data.name} </strong>
          <br>
          <strong>ID: ${data.id}</strong>
          <br>
          <strong>Email: ${data.email}</strong>
          <br>
          <strong>Office Number: ${data.officeNumber}</strong>
        </div>
      </article>

</div>`

};

module.exports = buildCard; 
