
const connection = require('../config/db');

const dotenv = require('dotenv').config();


async function selectProf(request, response) {

    const query = "SELECT * FROM profissional";


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