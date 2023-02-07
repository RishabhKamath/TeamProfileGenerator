const inquirer = require('inquirer');

const team = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the team manager\'s name:'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the team manager\'s employee ID:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the team manager\'s email address:'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter the team manager\'s office number:'
    }
  ])
  .then(answers => {
    // Store the team manager's information in a variable
    const manager = answers;

    // Perform other actions with the manager's information, such as adding the manager to the team array
  });

  function promptUser() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberType',
          message: 'What type of team member would you like to add?',
          choices: ['Engineer', 'Intern', 'Done']
        }
      ])
      .then(answers => {
        switch (answers.memberType) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            generateHTML();
        }
      });
  }
  
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the engineer\'s name:'
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter the engineer\'s employee ID:'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter the engineer\'s email address:'
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter the engineer\'s GitHub username:'
        }
      ])
      .then(answers => {
        const engineer = answers;
        engineer.role = 'Engineer';
        team.push(engineer);
        promptUser();
      });
  }
  
  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the intern\'s name:'
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter the intern\'s employee ID:'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter the intern\'s email address:'
        },
        {
          type: 'input',
          name: 'school',
          message: 'Enter the intern\'s school:'
        }
      ])
      .then(answers => {
        const intern = answers;
        intern.role = 'Intern';
        team.push(intern);
        promptUser();
      });
  }
  
  function generateHTML() {
    // Generate the HTML file using the team array
  }
  
  // Start the application by prompting the user for manager information
  promptUser();