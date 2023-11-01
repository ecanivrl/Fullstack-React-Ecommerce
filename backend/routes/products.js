const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


// ! Yeni bir Ürün oluşturma (CREATE)

router.post('/', async (req, res) => {
    try {
      const product = req.body;
  
      const newProduct = new Product( req.body );
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  });


// ! Tüm ürünleri getirme (READ ALL)

router.get('/', async (rea, res) => {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    }
  });

  // ! Tek bir ürün getirme ID ye göre (READ ONE)

  router.get('/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
  
        const product = await Product.findById(productId);

        if(!product) {
            return res.status(404).json({errorMessage: 'Product not found'})
            }

        res.status(200).json(product);
     
    } catch (error) {
      console.log(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    }
  });

  // ! Bir ürünü güncelleme (UPDATE)

  router.put('/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
      const updates = req.body;
  
      const existingProduct = await Product.findById(productId);
  
      if (!existingProduct) {
        return res.status(404).json({ errorMessage: 'Product not found' });
      }
  
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        updates,
        { new: true }
      );
      res.status(200).json({
        success: { message: 'Product updated successfully' },
        updatedProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    }
  });

    // ! Bir ürünü silme (DELETE)


router.delete('/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
      const deletedProduct = await Product.findByIdAndRemove(productId);
  
      if (!deletedProduct) {
        return res.status(404).json({ errorMessage: 'Product not found' });
      }
      res.status(200).json({
        success: { message: 'Product deleted successfully' },
        deletedProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errorMessage: 'Server Error' });
    }
  });


module.exports = router;