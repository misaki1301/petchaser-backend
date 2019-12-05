const jwt = require('jsonwebtoken');
const config = require('./config');

let chechToken = function (req, res, next) {
  let token =  req.headers['x-access-token'] || req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    //Remove Bearer from string
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, config.secret, function (err, decode) {
      if (err) {
        return res.json({
          message:"The token is not valid",
          statusCode: 403
        })
      }
        else {
          req.decoded = decode;
          next();
        }
    });
  } else {
    return res.json(
      {
        message:"Auth token is not supplied",
        statusCode: 400
      }
    );
  }
};

module.exports = {
  chechToken: chechToken
};
