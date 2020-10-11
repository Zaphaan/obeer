const express = require('express');
const router = express.Router();
const controller = require('./controllers/mainController');

// Création de notre route index.
router.get('/', controller.index); 

// Création de nos autres routes
router.get('/blonde', controller.blonde);

router.get('/blanche', controller.blanche);

router.get('/ambre', controller.ambre);

router.get('/brune', controller.brune);

router.get('/ipa', controller.ipa);


module.exports = router;