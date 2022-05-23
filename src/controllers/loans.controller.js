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
            loa_date_out: Date.now(),
            loa_date_entry,
            loa_date_loan: Date.now(),
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


async function createEntry(req, res) {

    const { fk_loa_book, fk_loa_usr_adm, fk_loa_usr_est } = req.body
    let fecha = new Date();
    try {

        const loan = await Loan.findOne({
            where: {
                fk_loa_book: fk_loa_book,
                fk_loa_usr_est: fk_loa_usr_est,
                fk_loa_usr_adm: fk_loa_usr_adm
            }
        })

        if (!loan) {
            res.status(201)
            res.json({ error: "Loan does not exist" });
        }

        else if (loan.loa_state === false) {
            res.status(201)
            res.json({ error: "book is in the library" });
        }

        else if (loan.loa_date_entry < fecha.toLocaleDateString()) {
            res.status(200)
            res.json(
                {
                    data: loan,
                    desc: "Apply sanction the delivery date was " + loan.loa_date_entry
                }
            );
            loan.loa_state = false
            await loan.save();
        }
        else {
            loan.loa_state = false
            await loan.save();
            res.json(loan);
        }

    } catch (error) {
    res.status(500).json({ message: error.message })
}
}

module.exports = { createLoans, getLoans, createEntry }