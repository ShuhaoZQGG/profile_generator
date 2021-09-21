const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (answer) => {
  let profile = "";
  profile += `\n`;
  profile += "Your Profile: \n";
  profile += `Your name is: ${answer} \n`;

  rl.question('What do you think of Node.js?', (answer) => {
    profile += `You think Node.js is: ${answer}\n`;

    rl.question('Why do you attend this bootcamp?', (answer) => {
      profile += `Your reason to atten this bootcamp is: ${answer}\n`;

      rl.question('Why do you like web development?', (answer) => {
        profile += `Your reason to like web development is: ${answer}\n`;

        rl.question('How long do you expect to find a job after bootcamp?', (answer) => {
          profile += `Your expectation to find a job after bootcamp is: ${answer}\n`;
          
          console.log(profile);
          rl.close();
        });

      });

    });

  });


});

