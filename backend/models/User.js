const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user', enum: ['user', 'admin'] },
    avatar: {
      type: String,
      //   default:
      //     'https://res.cloudinary.com/djz69vbs7/image/upload/v1626288952/avatars/default-avatar.png',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
