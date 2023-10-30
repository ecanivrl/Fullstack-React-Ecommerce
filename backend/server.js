const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,
      //   {
      //     useNewUrlParser: true,
      //     useUnifiedTopology: true,
      //     useCreateIndex: true
      //   }
      console.log('MongoDB bağlantısı başarılı')
    );
  } catch (error) {
    throw new Error('MongoDB bağlantısı başarısız');
  }
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    connect();
  console.log(`sunucu ${port} portunda çalışıyor ...`);
});
