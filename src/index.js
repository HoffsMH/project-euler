import problems from './problems';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var menu = function () {
  rl.question('Problem Number: ', function (answer) {
    if (answer === 'q') return rl.close();
    if (problems[answer]) {
      console.log(problems[answer]())
    }
    menu();
  });
};

menu();

