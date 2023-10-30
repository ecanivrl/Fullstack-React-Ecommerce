const express = require('express');
const router = express.Router();

// ! Tüm kategorileri getirme (READ ALL)

router.get('/', async (rea, res) => {
  res.send('Tüm kategoriler gelecek');
});

module.exports = router;
