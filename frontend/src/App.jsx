import './App.css';
import Blogs from './components/Blogs/Blogs';
import Brands from './components/Brands/Brands';
import Campaigns from './components/Campaigns/Campaigns';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Sliders from './components/Slider/Sliders';

function App() {
  return (
    <>
    <Sliders/>
    <Categories/>
    <Products/>
    <Campaigns/>
    <Blogs/>
    <Brands/>
    </>
  );
}

export default App;
