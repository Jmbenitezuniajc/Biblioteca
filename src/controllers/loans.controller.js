const Loan = require('../models/loans.model.js')
const encrypt = require('../utils/Bcrypt.js')

async function getLoans(req, res) {
    try {
        const loans = await Loan.findAll()
        console.log(loans);
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function createLoans(req, res) {

    const { loa_state, loa_date_out, loa_date_entry, loa_date_loan, fk_loa_book, fk_loa_usr_adm, fk_loa_usr_est } = req.body
    fecha = new Date();
    try {
        const newLoan = await Loan.create({
            
            loa_state,
            loa_date_out :  Date.now(),
            loa_date_entry,
            loa_date_loan : Date.now(),
            fk_loa_book,
            fk_loa_usr_adm,
            fk_loa_usr_est
        })

        console.log(newLoan);

        res.json(newLoan);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createLoans, getLoans }