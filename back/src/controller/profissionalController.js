
const connection = require('../config/db');

const dotenv = require('dotenv').config();

const fs = require('fs');
const path = require('path')

const uploadPath = path.join(__dirname, '..', 'uploads');

if(!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

async function storeProfissional(request, response) {

    if(!request.files) {
      return response.status(400).json({
        sucess: false,
        message: "Você não enviou o arquivo com foto."
      });
    }

    const imagem = request.files.imagem;
    const imagemNome = Date.now() + path.extname(imagem.name);
    
    imagem.mv(path.join(uploadPath, imagemNome), (erro) => {
      if(erro) {
        return response.status(400).json({
          sucess: false,
          message: "Erro ao mover o arquivo"
        })
      }

      const params = Array(
        imagemNome,
        request.body.nome,
        request.body.numero,
        request.body.email,
        request.body.descricao
    )

    const query = "INSERT INTO profissional(imagem, nome, numero, email, descricao) VALUES(?, ?, ?, ?, ?)";

    connection.query(query, params, (err, results) => {
      if(results) {
        response
          .status(201)
          .json({
            success: true,
            message: 'Conta criada com sucesso!',
            data: JSON.stringify(results)
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

    });

}

module.exports = {
    storeProfissional  
}