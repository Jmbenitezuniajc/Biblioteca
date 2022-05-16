const { Router } = require('express')
const { getRoles, createRol } = require('../controllers/roles.controller.js')
const { checkUserAuth, checkRoleAuth } = require('../utils/auth.js')

const router = Router();


router.get('/findRoles', checkUserAuth, checkRoleAuth([1, 2]), getRoles);
router.post('/CreateRol', checkUserAuth, checkRoleAuth([1, 2]), createRol);


module.exports = router;

