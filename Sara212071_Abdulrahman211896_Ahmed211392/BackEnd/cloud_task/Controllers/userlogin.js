
  // controllers/UserController.js
const userService = require('../Services/userlogin');

module.exports.getUsers = async (req,res) => {
  try {
  const users =await userService.findAllUsers();
  res.send({users})
  }
  catch(err){
  
      res.status(500);
      res.send({
          error:err
      });
  }
  };
  
  module.exports.addUser = async (req, res) => {
      const userInfo ={
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
  
      }; 
  
      try{
        
  const createdUser = await userService.addUser(userInfo);
  return res.status(201).send({
      msg: 'user created',
      userId: createdUser._id
  });
      }
      catch(err){
          return res.status(500).send({
              error:err.message
          });
  
      }
  };
  