const login = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username,
            email,
            password,
        });

        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

const register = async (req, res, next) => {
    res.send("Register Route");
};

const forgotpassword = async (req, res, next) => {
    res.send("Forgot Password Route");
};

const resetpassword = async (req, res, next) => {
    res.send("Reset Password Route");
};

module.exports = {
    register,
    login,
    forgotpassword,
    resetpassword
};