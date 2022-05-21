const path = require("path")

const swaggerSpec = {
    definition:{
        openapi: "3.0.0",
        info: {
            title: "Biblioteca Backend",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3001"
            }
        ]
    },
    apis: [`${path.join(__dirname,"../routes/*.js")}`]
}

module.exports = swaggerSpec;