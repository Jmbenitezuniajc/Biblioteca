const { Router } = require('express')
const { getBooks, createBooks } = require('../controllers/books.controller.js')
const {checkUserAuth,checkRoleAuth} = require('../utils/auth.js')

const router = Router();

router.get('/findBooks', checkUserAuth, checkRoleAuth([1,2]), getBooks);
router.post('/createBooks', checkUserAuth, checkRoleAuth([1,2]), createBooks);

module.exports = router;