const { Router } = require('express')
const { getUsers, createUsers, updateUsers, getUsersId } = require('../controllers/users.controller.js')
const { checkUserAuth, checkRoleAuth } = require('../utils/auth.js')

const router = Router();

router.get('/findUsers', getUsers);
router.post('/createUsers', checkUserAuth, checkRoleAuth([1, 2]), createUsers);
router.put('/updateUsers/:id', checkUserAuth, checkRoleAuth([1, 2]),updateUsers);
router.get('/findUsersId/:id', checkUserAuth, checkRoleAuth([1, 2]),getUsersId);
router.delete('/users/:id');

module.exports = router;