const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User.js');

const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

// ! Kullanıcı oluşturma

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const defaultAvatar = generateRandomAvatar();

    const exitingEmail = await User.findOne({ email });

    if (exitingEmail) {
      return res
        .status(400)
        .json({ errorMessage: `${email} mail adresi kullanılıyor` });
    }

    const exitingUser = await User.findOne({ username });

    if (exitingUser) {
      return res
        .status(400)
        .json({ errorMessage: `${username} ismi kullanılıyor` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server  Error!' });
  }
});



// ! Kullanıcı girişi (LOGİN)

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ errorMessage: `Email hatalı` });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ errorMessage: `Şifre hatalı` });
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

module.exports = router;
