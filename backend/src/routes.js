const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * LOGIN
 */
routes.post('/session', SessionController.create);

/**
 * ROTAS ONGS
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * PERFIL ONGS
 */
routes.get('/profile', ProfileController.index);

/**
 * ROTAS INCIDENTS(CASOS)
 */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete )

module.exports = routes;