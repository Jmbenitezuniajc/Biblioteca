const Book = require('../models/books.model.js')
const encrypt = require('../utils/Bcrypt.js')

async function getBooks(req, res) {
    try {
        const books = await Book.findAll()
        console.log(books);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function createBooks(req, res) {

    const { boo_title, boo_year, boo_editorial, boo_state, fk_boo_aut } = req.body

    try {
        const newBook = await Book.create({
            boo_title,
            boo_year,
            boo_editorial,
            boo_state,
            fk_boo_aut
        })

        console.log(newBook);

        res.json(newBook);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createBooks, getBooks }