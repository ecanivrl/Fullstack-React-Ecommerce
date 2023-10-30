const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

const connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ecani-e-commerce:wf6w3pPy0an8crvQ@mern-e-commerce.4b8r05m.mongodb.net/',
    //   {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
    console.log('connected to mongoDB')
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swansf feron' },
  ];

  res.json(customers);
});

app.listen(port, () => {
    connect();
  console.log(`sunucu ${port} portunda çalışıyor`);
});
