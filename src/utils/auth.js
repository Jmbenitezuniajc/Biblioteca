const userModel = require('../models/user.model');
const { verifyToken } = require('../utils/jwt')

const checkUserAuth = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        console.log(tokenData)

        if (tokenData.usr_identify) {
            next();
        } else {
            res.status(409)
            res.json({ error: "Auth Invalid" })
        }

    } catch (error) {
        console.log(error)
        res.status(409)
        res.json({ error: "General Auth Invalid" })
    }

}

const checkRoleAuth = (roles) => async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        console.log(tokenData)

        const userData = await userModel.findOne({
            where: {
                usr_identify: tokenData.usr_identify
            }
        })

        if ([].concat(roles).includes(userData.fk_usr_rol)) {
            next()
        } else {
            res.status(409)
            res.json({ error: "Permisos denegados" })
        }

    } catch (error) {
        console.log(error)
        res.status(409)
        res.json({ error: "General Invalid permisos" })
    }

}

module.exports = {checkUserAuth,checkRoleAuth}