const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async(req,res) => {
    const {username, email, password} = req.body;
    try {
        const newUser = await new User({
            username,
            email,
            password
        })
        await newUser.save();
        res.status(200).json({message: "User created sucessfully"});
    } catch(e) {
        console.log(e);
        res.status(400).json({error: e});
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({users: users});
    } catch (e) {
        res.status(400).json({erro: e});
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({error: "No user found"});
        }
        const isMatched = await bcrypt.compare(password,user.password);

        if(!isMatched) {
            return res.status(400).json({error: "Password incorrect"});
        }

        const token = jwt.sign({user_id: user._id, email: email}, "secret_token", {
            expiresIn: "1h"
        })

        return res.status(200).json({token: token}); 


    } catch(e) {
        console.log(e)
        res.status(400).json({error: e});
    }
}
// Logout (client-side action)
exports.logout = async (req, res) => {
    // Clear client-side token
    res.status(200).json({ message: 'Logged out successfully' });
  };
  
  // Account deletion (optional)
  exports.delete = async (req, res) => {
    const { email } = req.body;
    
    try {
      await User.findOneAndDelete({ email });
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
  };
  
