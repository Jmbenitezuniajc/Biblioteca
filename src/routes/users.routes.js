const { Router } = require('express')
const { getUsers, createUsers } = require('../controllers/users.controller.js')
const { checkUserAuth, checkRoleAuth } = require('../utils/auth.js')

const router = Router();

router.get('/findUsers', checkUserAuth, checkRoleAuth([1, 2]), getUsers);
router.post('/createUsers', checkUserAuth, checkRoleAuth([1, 2]), createUsers);
router.put('/users/:id');
router.delete('/users/:id');
router.get('/users/:id');

module.exports = router;