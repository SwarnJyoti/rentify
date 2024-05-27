const express = require('express');
const { createProperty, getProperties } = require('../controllers/propertyController');

const router = express.Router();

router.post('/', createProperty);
router.get('/', getProperties);

module.exports = router;






