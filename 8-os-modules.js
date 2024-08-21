const os = require('os');

//info about current user
const user = os.userInfo();
// console.log(user);

// return the system up time in seconds

console.log(`The system uptime is: ${os.uptime()} seconds`);

const currentOS = {
  name:os.type(),
  release: os.release(),
  Totalmem:os.totalmem(),
  Freemem: os.freemem(),
}

console.log(currentOS);