import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';

import UserPage from './pages/Admin/UserPage';
import CategoryPage from './pages/Admin/Categories/CouponPage';
import './App.css';
import UpdateCategoriPage from './pages/Admin/Categories/UpdateCouponPage';
import CreateCategoryPage from './pages/Admin/Categories/CreateCouponPage';
import CreateProductPage from './pages/Admin/Products/CreateProductPage';
import ProductPage from './pages/Admin/Products/ProductPage';
import UpdateProductPage from './pages/Admin/Products/UpdateProductPage';
import CouponPage from './pages/Admin/Categories/CouponPage';
import CreateCouponPage from './pages/Admin/Categories/CreateCouponPage';
import UpdateCouponPage from './pages/Admin/Categories/UpdateCouponPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductsDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoriPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path='coupons' element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />


      </Route>
    </Routes>
  );
}

export default App;
