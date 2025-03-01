const { Sequelize } = require('sequelize');
const config = require('./config');

// // Create a Sequelize instance
const sequelize = new Sequelize(config.FAYTHE_DB_SCHEMA, config.FAYTHE_DB_USERNAME, config.FAYTHE_DB_PASSWORD, {
    host: config.FAYTHE_DB_HOST,
    port: 3306,
    dialect: 'mysql' // or 'postgres', 'sqlite', etc.
});

// // Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
