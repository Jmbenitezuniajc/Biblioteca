const jwt = require("jsonwebtoken")

const tokenSing = async (user) => {
    return jwt.sign(
        {
            usr_identify: user.usr_identify,
            fk_usr_rol: user.fk_usr_rol
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h"
        }
    )
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
};

module.exports = { tokenSing, verifyToken }