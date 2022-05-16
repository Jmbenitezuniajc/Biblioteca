const { Router } = require('express')
const { getAuthors,createAuthors } = require('../controllers/authors.controller.js')
const {checkUserAuth,checkRoleAuth} = require('../utils/auth.js')

const router = Router();


router.get('/findAuthors', checkUserAuth, checkRoleAuth([1,2]), getAuthors);
router.post('/CreateAuthor', checkUserAuth, checkRoleAuth([1,2]), createAuthors);


module.exports = router;

