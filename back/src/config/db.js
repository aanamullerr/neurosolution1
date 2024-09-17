// Importa o módulo 'mysql2' para trabalhar com banco de dados MySQL no Node.js
const mysql = require('mysql2');
// Carrega as variáveis de ambiente a partir de um arquivo '.env' para proteger dados sensíveis
const dotenv = require('dotenv').config();

// Cria a conexão com o banco de dados MySQL usando as informações do arquivo '.env'
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Tenta se conectar ao banco de dados
connection.connect(function(err) {
    if(err) {
        throw err;
    } else {
        console.log("MySql conectado!")
    }
});

// Exporta a conexão para que possa ser usada em outras partes do código
module.exports = connection; 