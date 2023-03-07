const Sequelize = require('sequelize');
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
require('dotenv').config();

// const sequelize = new Sequelize(
//     process.env.DATABASE_NAME,
//     process.env.ADMIN_USERNAME,
//     process.env.ADMIN_PASSWORD,
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//     }
// );

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.ADMIN_USERNAME,
    process.env.ADMIN_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);



sequelize.authenticate()
    .then(() => {
        console.log('\x1b[34m','Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

const db = {};
db.sequelize = sequelize;

try {
    fs.readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) &&
                (file.slice(-3) === '.js');
        })
        .forEach(file => {
            const model = require(path.join(__dirname, file))(sequelize,
                Sequelize);
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
