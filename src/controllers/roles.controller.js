const Rol = require('../models/rol.model.js')

async function getRoles(req, res) {
    try {
        const roles = await Rol.findAll()
        console.log(roles);
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


async function createRol(req, res) {

    const { rol_name } = req.body

    try {
        const newRol = await Rol.create({
            rol_name
        })

        console.log(newRol);

        res.json(newRol);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {getRoles,createRol}