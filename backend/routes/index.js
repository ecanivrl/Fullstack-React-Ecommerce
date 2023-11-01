const express = require('express');
const router = express.Router();

// ! Diger rotalari buraya import ediyoruz

const categoryRoute = require('./categories.js');
const authRoute = require('./auth.js');
const productRoute = require('./products.js');

// ! Her rota için bir prefix belirliyoruz

router.use('/categories', categoryRoute);
router.use('/auth', authRoute);
router.use('/products', productRoute);

module.exports = router;
