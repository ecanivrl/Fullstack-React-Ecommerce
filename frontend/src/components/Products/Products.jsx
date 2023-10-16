import { useState } from 'react';
import ProductItem from './ProductItem';
import './Products.css';
import PropTypes from 'prop-types';
import ProductsData from '../../data.json';
import Slider from 'react-slick';

function NextBtn({ onClick }) {
  return (
    <button onClick={onClick} className="glide__arrow glide__arrow--right">
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}
function PrevBtn({ onClick }) {
  return (
    <button onClick={onClick} className="glide__arrow glide__arrow--left">
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [productsSlide] = useState(ProductsData);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 992,
        settings :{
        slidesToShow: 2,

        }
      },
      {
        breakpoint: 520,
        settings :{
        slidesToShow: 1,

        }
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            <Slider {...sliderSettings}>
              {productsSlide.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
