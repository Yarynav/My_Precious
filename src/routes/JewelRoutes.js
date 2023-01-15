const express = require('express');
const router = express.Router();
const JewelController = require('../controllers/jewelController');
const { loggerMiddleware } = require('../middlewares/loggerMiddleware');

router.get('/', loggerMiddleware, JewelController.getJewels);
router.get('/filters', loggerMiddleware, JewelController.getFilterJewels);

module.exports = router;
