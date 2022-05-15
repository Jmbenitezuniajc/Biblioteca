const userModel = require('../models/user.model.js')
const { compare } = require('../utils/Bcrypt')
const { tokenSing } = require('../utils/jwt')

const login = async (req, res) => {
    try {
        const { usr_login, usr_pass } = req.body

        const user = await userModel.findOne({
            where: {
                usr_login: req.body.usr_login
            }
        })

        if (!user) {
            res.status(404)
            res.json({ error: "User not found" });
        } else {
            const checkpass = await compare(usr_pass, user.usr_pass)
            const tokenSession = await tokenSing(user)

            console.log(checkpass)

            if (checkpass) {
                res.json(
                    {
                        data: user,
                        tokenSession
                    }
                )
            }

            if (!checkpass) {
                res.status(409)
                res.json({ error: "Invalid password" })
            }
        }
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

module.exports = login