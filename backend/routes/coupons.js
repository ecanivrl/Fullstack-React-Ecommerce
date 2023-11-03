const express = require('express');
const router = express.Router();
const Coupon = require('../models/Coupon.js');

// ! Yeni bir KOPUN oluşturma (CREATE)

router.post('/', async (req, res) => {
  try {
    const { code } = req.body;

    const exitingCoupon = await Coupon.findOne({ code });

    if (exitingCoupon) {
      return res.status(400).json({ message: 'Kupon zaten var' });
    }

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'sunucu hatası' });
  }
});

// ! Tüm KUPONLARI getirme (READ)

router.get('/', async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'sunucu hatası' });
  }
});

// ! ID ye göre KUPON getirme (READ)

router.get('/:couponId', async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const coupon = await Coupon.findById(couponId);

    if (!coupon) {
      return res.status(404).json({ message: 'Kupon bulunamadı' });
    }

    res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

// ! KUPON koduna göre KUPON getirme (READ)

router.get('/code/:couponCode', async (req, res) => {
  try {
    const couponCode = req.params.couponCode;

    const coupon = await Coupon.findOne({ code: couponCode });

    if (!coupon) {
      return res.status(404).json({ message: 'Kupon kodu bulunamadı' });
    }

    res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

// ! KUPON güncelleme (UPDATE)

router.put('/:couponId', async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;

    const existingCoupon = await Coupon.findById(couponId);

    if (!existingCoupon) {
      return res.status(404).json({ message: 'Kupon bulunamadı' });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
      new: true,
    });
    res.status(200).json({
      message: 'Kupon güncellendi',
      updatedCoupon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'sunucu hatası' });
  }
});

// ! KUPON silme (DELETE)

router.delete('/:couponId', async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const existingCoupon = await Coupon.findById(couponId);

    if (!existingCoupon) {
      return res.status(404).json({ message: 'Kupon bulunamadı' });
    }

    await Coupon.findByIdAndDelete(couponId);

    res.status(200).json({ message: 'Kupon silindi' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'sunucu hatası' });
  }
});

module.exports = router;
