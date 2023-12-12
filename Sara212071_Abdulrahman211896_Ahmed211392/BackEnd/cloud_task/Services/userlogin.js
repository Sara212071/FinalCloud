// services/UserService.js
const bcrypt = require('bcrypt');
const UserModel = require('../models/userlogin');


module.exports.findAllUsers = async()=> {
  try{
      const users = await UserModel.find();
      return users;
  } catch(err){
      throw new Error("NO users retrieved");
  }
};

module.exports.addUser = async(userInfo) => {
try{
  const existingUser = await UserModel.findOne({ email: userInfo.email }).select('+banned');

   if (existingUser && existingUser.banned) {
     throw new Error("User is banned. Registration failed.");
   }
  let hashedPassword = await bcrypt.hash(userInfo.password, 12);
  const user = UserModel({
    username: userInfo.username,
    password: hashedPassword,
    email: userInfo.email,
    banned: false
}    );
const createdUser = await user.save();
return createdUser;


}
catch (err){
  console.error('Error creating user:', err); 
    throw new Error(err.message);
}


};
module.exports.getUserById = async (userId) => {
  const user = await UserModel.findById(userId).select('+banned');
  return user;
};  