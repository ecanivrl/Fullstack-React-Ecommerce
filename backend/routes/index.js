const express = require('express');
const router = express.Router();

// ! Diger rotalari buraya import ediyoruz

const categoryRoute = require('./categories.js');
const authRoute = require('./auth.js');
const productRoute = require('./products.js');
const couponRoute = require('./coupons.js');

// ! Her rota için bir prefix belirliyoruz

router.use('/categories', categoryRoute);
router.use('/auth', authRoute);
router.use('/products', productRoute);
router.use('/coupons', couponRoute);

module.exports = router;
