const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json({ error: "Email and password is required" });
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (emailRegex.test(email)) {
            return res.status(403).json({ error: "Invalid email format" });
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(403).json({ error: "User already exists" });
        }

        const user = new User({
            email,
            password
        });

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.status(201).json({ email: user.email, token });


    } catch (error) {
        next(error);
    }

}
