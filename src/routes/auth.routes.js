const { Router } = require('express')
const login = require('../controllers/auth.controller.js')


const router = Router();

/**
 * @swagger
 * /login:
 *  post:
 *      summary: Login User
 *      tags: [user]
 *      requestBody:
 *      required: true
 *      content:
 *      aplication/json:
 *      schema:
 *      type: object
 *      properties:
 *          usr_login:
 *              type:string
 *          usr_pass:
 *              type:string
 */
router.post('/login', login);

module.exports = router;