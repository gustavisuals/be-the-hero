const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota = Recurso
 */

/**
 *  Requisições HTTP:
 *  
 *  GET: Busca/lista uma informação do back-end
 *  POST: Cria/insere uma informação no back-end
 *  PUT:  ALtera uma informação no back-end
 *  DELETE: Deleta uam informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmentros nomeados enviados na rota após "?" (Usualmente para Filtros, paginação, etc).
  * Route Params: Parâmentro utilizado para identificar recursos (Ex.: rotas, urls)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  */

  /**
   *  Tipos de Banco de Dados:
   * 
   *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQl Server; // Relacionais.
   *  NoSQL: MongoDB, CounchDB, etc. // Não Relacionais
   *  
   *  Linguagem e forma de manipulção do banco de dados:
   *  
   *  Driver: SELECT * FROM users
   *  Query Builder: Table('users').select('*').where()
   */

