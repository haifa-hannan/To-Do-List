import { Sequelize } from "sequelize";

const db = new Sequelize ('db_praktikum3', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;