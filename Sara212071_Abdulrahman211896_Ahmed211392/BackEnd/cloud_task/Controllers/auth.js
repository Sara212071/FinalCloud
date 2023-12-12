const AuthService = require('../Services/auth');

module.exports.postUser = async (req, res) => {
  try {
    const userInfo ={
      username: req.body.username,
      password: req.body.password,
      name: req.body.name  
    };

    const userExists = await AuthService.doesUserExist(userInfo.username);
    if (userExists) {
      return res.status(422).send({
        error: 'A user with the same username already exists.'
      });
    }

    await AuthService.addUser(userInfo);

  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }


};