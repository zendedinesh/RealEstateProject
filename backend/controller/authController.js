
const User = require('../model/User'); //user model

// Signup controller 
exports.signup = async (req, res) => {
    try {
        // Check if the email is already registered 
        const isExisting = await User.findOne({ email: req.body.email });
        if (isExisting) {
            return res.status(400).json({ error: "Email is already registered" }); 
        }
        const {firstName,lastName,email,phonenumber,password,gender}=req.body;

        // Create a new user instance
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            gender,
            phonenumber,
        }); 

        // Save the new user to the database
        const user = await newUser.save();

        // Return a response with the newly created user
        const responseUser=user;
        delete responseUser.password;
        return res.status(201).json({ responseUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


// Login controller
exports.login = async (req, res) => {
    try {
        const { email,password } = req.body;

        // Find a login record by email
        const user = await User.findOne({ email:email });

        // Check if a user record with the provided email exists
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Check if the provided password matches the stored password (You should use bcrypt for secure password hashing)
        if (password !== user.password) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // If everything is valid, you can generate a JWT token here

        // Return a response with the user record or token
        delete user.password;
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


