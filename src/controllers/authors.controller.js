const Author = require('../models/authors.model.js')

async function getAuthors(req, res) {
    try {
        const authors = await Author.findAll()
        console.log(authors);
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


async function createAuthors(req, res) {

    const { aut_name, aut_lastname } = req.body

    try {
        const newAuthor = await Author.create({
            aut_name,
            aut_lastname
        })

        console.log(newAuthor);

        res.json(newAuthor);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {getAuthors,createAuthors}