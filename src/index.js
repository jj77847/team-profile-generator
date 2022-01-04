const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateMyTeam = require('./lib/generateMyTeam');

team = [];
const internQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Interns name?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Interns email?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the Interns School?'
    },
    {
      type: 'list',
      name: 'addMember',
      message: 'What type of team member do you want to add next?',
      choices: ['Engineer', 'Intern', 'None'],
    }
  ])
.then((internAnswers)) => {
  const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
  team.push(intern)
  switch(internAnswers.addMember){
    case 'Engineer';
      engineerQuestions();
      break;
    case 'Intern';
      internQuestions();
      break;
    default;
      writeToFile('dist/index.html', generateMyTeam(team)
    }
  })
}

managerQuestions();

const engineerQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Engineers name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Engineers email?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineers GitHub username?',
    },
    {
      type: 'list',
      name: 'addMember',
      message: 'What type of team member do you want to add next?',
      choices: ['Engineer', 'Intern', 'None'],
    }
  ])
.then((engineerAnswers)) => {
  const intern = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
  team.push(intern)
  switch(internAnswers.addMember){
    case 'Engineer';
      engineerQuestions();
      break;
    case 'Intern';
      internQuestions();
      break;
    default;
      writeToFile('dist/index.html', generateMyTeam(team)
    }
  })
}

const managerQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email?'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the managers office number?'
    },
    {
      type: 'list',
      name: 'addMember',
      message: 'What type of team member do you want to add next?',
      choices: ['Engineer', 'Intern', 'None'],
    }
  ])
.then((managerAnswers)) => {

  const intern = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.school)
  team.push(manager)
  switch(internAnswers.addMember) {
    case 'Engineer';
    engineerQuestions();
      break;
    case 'Intern';
      internQuestions();
      break;
    default;
      writeToFile('dist/index.html', generateMyTeam(team)
    }
  })
}

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};
