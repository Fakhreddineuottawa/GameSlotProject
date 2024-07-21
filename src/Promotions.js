import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import CustomArrow from './CustomArrow';

const promotions = [
  { id: 1, title: 'Promo 1', price: '$49.99', description: 'Special discount on Promo 1.', image: '/promo1.jpg' },
  { id: 2, title: 'Promo 2', price: '$59.99', description: 'Special discount on Promo 2.', image: '/promo2.jpg' },
  { id: 3, title: 'Promo 3', price: '$69.99', description: 'Special discount on Promo 3.', image: '/promo3.jpg' },
];

const Promotions = ({ addToCart }) => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  const handleAddToCart = (promoId) => {
    const promo = promotions.find(p => p.id === promoId);
    if (promo) {
      addToCart(promo);
    }
  };

  return (
    <div className="container">
      <h1>{t('currentPromotions')}</h1>
      <Slider {...settings}>
        {promotions.map(promo => (
          <div key={promo.id} className="game-card">
            <img src={promo.image} alt={promo.title} onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/300x400?text=Image+not+available";}} />
            <div>
              <h2>{promo.title}</h2>
              <p className="price">{promo.price}</p>
              <p>{promo.description}</p>
              <button onClick={() => handleAddToCart(promo.id)}>{t('addToCart')}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Promotions;
