// const connection = require('../config/db');
// const dotenv = require('dotenv').config();

// async function storeTask(request, response) {
  
//   const params = Array(
//     request.body.nome,
//     request.body.sobrenome,
//     request.body.nascimento,
//     request.body.email,
//     request.body.senha,
//   );

//   const query = 'INSERT INTO cadastro(nome, sobrenome, data, email, senha) VALUES(?, ?, ?, ?, ?)';

//   connection.query(query, params, (err, results) => {
//     if(results) {
//       response
//         .status(201)
//         .json({
//           success: true,
//           message: 'Conta criada com sucesso!',
//           data: results
//         })
//     } else {
//       console.log(params)
//       console.log(query)
//       console.log(results)
//       response
//         .status(400)
//         .json({
//           success: false,
//           message: 'Dados inválidos',
//           data: err
//       })
//     }
//   })
// }

// module.exports = {
//   storeTask
// }