require("dotenv").config()
const Sequelize =require("sequelize");

module.exports = sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
);
