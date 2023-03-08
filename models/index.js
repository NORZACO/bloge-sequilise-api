const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
require('dotenv').config();

const sequelize = new Sequelize('blogedbase', 'blogeradmin', 'MyPa55w0rd#blogedbase@', {
    dialect: 'mysql',
    host: '127.0.0.1',
});

(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

try {
    fs.readdirSync(__dirname)
        .filter(file => {
            return (
                file.indexOf('.') !== 0 &&
                file !== basename &&
                file.slice(-3) === '.js'
            );
        })
        .forEach(file => {
            const model = require(path.join(__dirname, file))(sequelize, Sequelize);
            db[model.name] = model;
            console.log(`Model "${model.name}" has been successfully loaded.`);
        });
    console.log('All models have been successfully loaded.');
} catch (error) {
    console.error('Unable to read models directory:', error);
    process.exit(1);
}

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
        console.log(`Associations have been made for model "${modelName}".`);
    }
});

console.log('All associations have been successfully made.');

module.exports = db;
