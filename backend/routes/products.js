const express = require('express');
const router = express.Router();

// ! Tüm ürünleri getirme (READ ALL)

router.get("/", async (req, res) => {
    res.send("Tüm ürünler getirildi")
})

module.exports = router;