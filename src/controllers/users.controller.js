const User = require('../models/user.model.js')
const encrypt = require('../utils/Bcrypt.js')

async function getUsers(req, res) {
    try {
        const users = await User.findAll()
        console.log(users);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function createUsers(req, res) {

    const { usr_login, usr_pass, usr_name, usr_lastname, usr_state, usr_type, usr_identify, usr_type_identify, fk_usr_rol } = req.body

    const passHash = await encrypt.encrypt(usr_pass)

    try {
        const newUser = await User.create({
            usr_login,
            usr_pass: passHash,
            usr_name,
            usr_lastname,
            usr_state,
            usr_type,
            usr_identify,
            usr_type_identify,
            fk_usr_rol
        })

        console.log(newUser);

        res.json(newUser);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createUsers, getUsers }