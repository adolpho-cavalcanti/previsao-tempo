const express = require('express');
const LocalesController = require('../controllers/LocalesController');
const WeatherController = require('../controllers/WeatherController');

const routes = express.Router();

routes.get('/clima/locales/findall', LocalesController);
routes.get('/clima/weather/findall', WeatherController);


module.exports = routes;