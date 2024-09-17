// Importa o aplicativo Express configurado no arquivo 'app.js'
const app = require('./app');

// Obtém a porta configurada para o servidor a partir do aplicativo
const port = app.get('port');

// Inicia o servidor e faz com que ele comece a ouvir as requisições na porta especificada
app.listen(port, () => console.log(`Run on port ${port}!`));