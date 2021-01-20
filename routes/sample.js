const router = require('express').Router();
const sampleController = require('../controllers/sample')
router.post('/sample-Route',sampleController.sampleFunc)

module.exports = router;