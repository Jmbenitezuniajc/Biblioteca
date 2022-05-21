const { Router } = require('express')
const { getLoans, createLoans } = require('../controllers/loans.controller.js')
const {checkUserAuth,checkRoleAuth} = require('../utils/auth.js')

const router = Router();

router.get('/findLoans', checkUserAuth, checkRoleAuth([1,2]), getLoans);
router.post('/createLoans', checkUserAuth, checkRoleAuth([1,2]), createLoans);

module.exports = router;