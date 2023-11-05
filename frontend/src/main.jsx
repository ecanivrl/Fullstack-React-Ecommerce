import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layouts.jsx';
import CartProvider from './context/CartProvider.jsx';
import App from './App.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';



ReactDOM.createRoot(document.getElementById('ecanivrl')).render(
  <BrowserRouter>
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
