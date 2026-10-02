import { Sequelize } from "sequelize";

export const sequelizeDB = new Sequelize('chat app', 'root', '', {
    host: '127.0.0.1',
    port : 3306,
    dialect: 'mysql',
});

try {
    await sequelizeDB.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}