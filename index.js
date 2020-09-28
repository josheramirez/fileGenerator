const fs = require('fs');
const inquirer = require('inquirer');

// check if the file exist
const existingConfig = fs.existsSync('now.json');

function buildConfig(){
  console.log('Working...');
}

if (existingConfig) {
  inquirer
    .prompt([
      {
        name: 'isHuman',
        type: 'confirm',
        message: 'are you human?',
        default: false    
      }
    ])
    .then(answers => {
      console.log(answers);
    });
   
} else {
  buildConfig();
}



