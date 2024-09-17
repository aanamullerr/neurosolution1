// Importa o módulo 'express' para criar o servidor web
const express = require('express');
// Carrega as variáveis de ambiente do arquivo '.env'
const dotenv = require('dotenv').config();
// Importa o roteador de tarefas que contém as rotas da aplicação
const taskRouter = require('./routes/taskRouter');
// Importa o módulo 'cors' para permitir que o servidor lide com requisições de diferentes origens (CORS)
const cors = require('cors');
// Cria uma instância do aplicativo Express
const app = express();

// Define a porta na qual o servidor vai rodar, usando a variável de ambiente PORT ou 3005 como padrão
app.set('port' , process.env.PORT || 3005);
// Configura o aplicativo para usar JSON no corpo das requisições
app.use(express.json());
// Habilita o CORS para permitir requisições de outras origens
app.use(cors());
// Define que todas as rotas que começam com '/api' serão tratadas pelo 'taskRouter'
app.use('/api', taskRouter);

// Exporta o aplicativo para ser usado em outro lugar, como o arquivo de inicialização do servidor
module.exports = app;