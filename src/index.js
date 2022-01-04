// questions for database

// prompt questions examples hw9
inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
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


const generateInstallation = (answers) => {
  return `## Installation


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
