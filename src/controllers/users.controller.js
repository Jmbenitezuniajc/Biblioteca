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

const updateUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const { usr_login, usr_pass, usr_name, usr_lastname, usr_state, usr_type, usr_type_identify, fk_usr_rol } = req.body

        const passHash = await encrypt.encrypt(usr_pass)

        const user = await User.findByPk(id);

        user.usr_login = usr_login
        user.usr_pass = passHash
        user.usr_name = usr_name
        user.usr_lastname = usr_lastname
        user.usr_state = usr_state
        user.usr_type = usr_type
        user.usr_type_identify = usr_type_identify
        user.fk_usr_rol = fk_usr_rol

        await user.save();

        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const getUsersId = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createUsers, getUsers, updateUsers, getUsersId }