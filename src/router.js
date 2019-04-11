const express = require('express');
const multer = require('multer');
const multerConfig = require("./config/multer");

const routers = express.Router();

const boxController = require('./controllers/BoxController');
const fileController = require('./controllers/FileController');

routers.post('/boxes', boxController.store);
routers.get('/boxes/:id', boxController.show);
routers.post('/boxes/:id/files', multer(multerConfig).single('file') ,fileController.store);

module.exports = routers;