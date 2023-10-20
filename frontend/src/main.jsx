import ReactDOM from 'react-dom/client';
import CartProvider from './context/CartProvider.jsx';
import App from './App.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('ecanivrl')).render(
  <CartProvider>
    <MainLayout>
      <App />
    </MainLayout>
  </CartProvider>
);
