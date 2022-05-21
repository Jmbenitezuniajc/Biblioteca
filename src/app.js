require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bp = require('body-parser')
const swaggerUI =  require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerSpec = require('./config/swagger.js')
const sequelize = require('./config/database.js')
const usersRoutes = require('./routes/users.routes.js')
const rolesRoutes = require('./routes/roles.routes.js')
const authRoutes = require('./routes/auth.routes.js')
const authorRoutes = require('./routes/authors.routes.js')
const booksRoutes = require('./routes/books.routes.js')
const loansRoutes = require('./routes/loans.routes.js')

const app = express()

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// Config Swagger
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))

//Configuracion de routes - services
app.use(usersRoutes)
app.use(rolesRoutes)
app.use(authRoutes)
app.use(authorRoutes)
app.use(booksRoutes)
app.use(loansRoutes)

// Iniciar app
const port = process.env.port
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    connectsequelize();
})

// Validar conexion BD
const connectsequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}