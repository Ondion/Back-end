const users = require('../models/users'); 

function checkUser(user, pass) {
  const { username, password, admin } = users.getData()
  if(user === username && pass === password) {
    return { username, password, admin };
  } else {
    return false;
  }
}

module.exports = {
  checkUser
};
