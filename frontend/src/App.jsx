import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage';
import BlogDetailsPage from './pages/BlogDetailsPage';

import './App.css';
import AdminUserPage from './pages/admin/AdminUserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/auth" element={<AuthPage/>} />
      <Route path="/product/:id" element={<ProductsDetailsPage/>} />
      <Route path="/blog/:id" element={<BlogDetailsPage/>} />
      <Route path='/admin/*'>

      <Route path='users' element={<AdminUserPage/>} />
      </Route>

    </Routes>
  );
}

export default App;
