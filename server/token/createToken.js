const jwt = require('jsonwebtoken');

module.exports = function (use, id) {
  const token = jwt.sign({user_id: user_id}, 'learn', {expiresIn: '60s'});
  return token;
}
