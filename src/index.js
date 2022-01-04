const {
  generateManager,
  generateEngineer,
  generateInturn,
} = require()

const {
  initialQuestions,
  managerQuestions,
  employeeQuestions,
  engineerQuestions,
  internQuestions,
  continueQuestions,
} = require()

const generateIndex = ({manager, engineer, intern, teamName }) => {
  return
}

// questions for database
Questions:
  - Enter team nameDone 

  - Enter manager name
  - Enter manager employee ID
  - Enter manager email address
  - Enter manager office number

  - Select the next employee you want to add:
    - Engineer
    - Intern
    - None

  - Enter engineer name
  - Enter engineer employee ID
  - Enter engineer email address
  - Enter engineer github username

  - Enter intern name
  - Enter intern employee ID
  - Enter intern email address
  - Enter intern school name

// prompt questions examples hw9
inquirer.prompt([
  {
    type: "input",
    message: "What is your team name?",
    name: "title",
  },


  
  {
    type: "input",
    message: "Input any tests requirements:",
    name: "testInput",
    when: (answers) => {
      return answers.test;
    },
  },
]);

// const generateInstallation = (answers) => {
//     return `## Installation
// };

// generate readme example
const generateReadme = (answers) => {
  return `${generateTitle(answers)}
  
  ${generateTableOfContents(answers)}
  
  ${generateDescription(answers)}
  
  ${generateInstallation(answers)}
  
  ${generateUsage(answers)}
  
  ${generateTests(answers)}
  
  ${generateContributing(answers)}
  
  ${generateLicense(answers)}
  `;
};

//
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const init = async () => {
  // prompt the questions using inquirer

  // generate readme based on answers
  const readme = generateReadme();

  // write generated readme to a file
  writeToFile("GENERATED_README.md", readme);
};

init();
