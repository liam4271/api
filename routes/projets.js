const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); 
const mesureController = require('../controler/test');

router.use(bodyParser.json());

// Route pour créer une nouvelle mesure
router.post('/mesures', mesureController.createMesure);

// Route pour obtenir toutes les mesures
router.get('/mesures', mesureController.getMesures);

// Route pour obtenir une mesure par son ID
router.get('/mesures/:id', mesureController.getMesureById);

// Route pour mettre à jour une mesure
router.put('/mesures/:id', mesureController.updateMesure);

// Route pour supprimer une mesure
router.delete('/mesures/:id', mesureController.deleteMesure);

module.exports = router;
