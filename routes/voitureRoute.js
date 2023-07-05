const router = require('express').Router();
const voitureCtrl = require('../controllers/voitureController');

router.get('/allcars', voitureCtrl.selectAllCar);
router.get('/:id', voitureCtrl.selectCar);
router.post('/', voitureCtrl.createCar);
router.put('/:id', voitureCtrl.updateCar);
router.delete('/:id', voitureCtrl.deleteCar);

module.exports = router;
