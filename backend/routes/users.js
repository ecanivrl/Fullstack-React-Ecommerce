const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// ! Bütün kullanıcıları getirme (GET)

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

// ! Tek bir kullanıcı getirme (READ ONE)

router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    try {
      const user = await User.findById(userId);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(404).json({ errorMessage: 'Kullanıcı bulunamadı' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

// ! Kullanıcı Silme (DELETE)

// Kullanıcı silme (Delete)
router.delete("/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});


module.exports = router;