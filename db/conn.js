const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodetodo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
 sequelize.authenticate()
 console.log('Database initialized...')   
} catch (error) {
    console.log('Error on initialize database: ', error)
}

module.exports = sequelize