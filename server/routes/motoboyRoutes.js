const express = require('express');
const router = express.Router();
const motoboyController = require('../controllers/motoboyController');

router.post('/motoboys', motoboyController.createMotoboy);
router.get('/motoboys', motoboyController.getAllMotoboys);
router.put('/motoboys/:id', motoboyController.updateMotoboy);
router.delete('/motoboys/:id', motoboyController.deleteMotoboy);

module.exports = router;
