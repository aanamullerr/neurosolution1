// Importa a conexão com o banco de dados a partir do arquivo de configuração
const connection = require('../config/db');
// Carrega as variáveis de ambiente do arquivo '.env'
const dotenv = require('dotenv').config();

// Função assíncrona que busca todos os profissionais no banco de dados
async function selectProf(request, response) {
  // Define a consulta SQL para selecionar todos os registros da tabela 'profissional'
    const query = "SELECT * FROM profissional";

    // Executa a consulta no banco de dados
    connection.query(query, (err, results) => {
      console.log(err, results);
        if(results) {
          response
            .status(201)
            .json({
              success: true,
              message: 'Conta criada com sucesso!',
              data: results
            })
        } else {
          response
            .status(400)
            .json({
              success: false,
              message: 'Dados inválidos',
              data: err
          })
        }
      })
}

module.exports = {
    selectProf  
}