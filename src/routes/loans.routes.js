const { Router } = require('express')
const { getLoans, createLoans, createEntry } = require('../controllers/loans.controller.js')
const {checkUserAuth,checkRoleAuth} = require('../utils/auth.js')

const router = Router();

router.get('/findLoans', checkUserAuth, checkRoleAuth([1,2]), getLoans);
router.post('/createLoans', checkUserAuth, checkRoleAuth([1,2]), createLoans);
router.post('/createEntry', checkUserAuth, checkRoleAuth([1,2]), createEntry);

module.exports = router;