// Importa a conexão com o banco de dados a partir do arquivo de configuração
const connection = require('../config/db');
// Carrega as variáveis de ambiente do arquivo '.env'
const dotenv = require('dotenv').config();

// Função assíncrona que armazena os dados do profissional no banco de dados
async function storeProfissional(request, response) {
  // Extrai os dados enviados no corpo da requisição e os coloca em um array
    const params = Array(
        request.body.nome,
        request.body.numero,
        request.body.email,
        request.body.descricao
    )

    // Define a consulta SQL para inserir os dados na tabela 'profissional'
    const query = "INSERT INTO profissional(nome, numero, email, descricao) VALUES(?, ?, ?, ?)";

    // Executa a consulta no banco de dados com os parâmetros fornecidos
    connection.query(query, params, (err, results) => {
        if(results) {
          response
            .status(201)
            .json({
              success: true,
              message: 'Conta criada com sucesso!',
              data: results
            })
        } else {
          console.log(params)
          console.log(query)
          console.log(results)
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
    storeProfissional  
}