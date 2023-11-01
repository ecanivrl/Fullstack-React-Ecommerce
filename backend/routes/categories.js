const express = require('express');
const router = express.Router();
const Category = require('../models/Category.js');

// ! Yeni bir kategori oluşturma (CREATE)

router.post('/', async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCategory = new Category({ name, img });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

// ! Tüm kategorileri getirme (READ ALL)

router.get('/', async (rea, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

// ! Tek bir kategori getirme (READ ONE)

router.get('/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    try {
      const category = await Category.findById(categoryId);
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(404).json({ errorMessage: 'Category not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

// ! Bir kategoriyi güncelleme (UPDATE)

router.put('/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;

    const existingCategory = await Category.findById(categoryId);

    if (!existingCategory) {
      return res.status(404).json({ errorMessage: 'Category not found' });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true }
    );
    res.status(200).json({
      success: { message: 'Category updated successfully' },
      updatedCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

// ! Bir kategoriyi silme (DELETE)

router.delete('/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await Category.findByIdAndRemove(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ errorMessage: 'Category not found' });
    }
    res.status(200).json({
      success: { message: 'Category deleted successfully' },
      deletedCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: 'Server Error' });
  }
});

module.exports = router;
