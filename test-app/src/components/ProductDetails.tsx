import React from 'react';
import advert from '../assets/Group 44 (2).png';
import EggBallon from '../assets/EggBallon.png';
import Rec1 from '../assets/Recomend.png';
import Rec2 from '../assets/window recoomend.png';
import '../styles/ProductDetails.css';

type ProductDetailProps = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ name, price, description, imageUrl }) => {
  return (
    <div className="product-detail">
      <div className="product-main">
        <img src={advert} alt={name} className="advert-image" />
        <div className="product-info">
          <h1>{name}</h1>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      </div>

      <div className="similar-products">
        <h2>People also buy:</h2>
          <img src={EggBallon} alt="Egg Balloon" />
          <img src={Rec1} alt="Recommendation 1" />
          <img src={Rec2} alt="Recommendation 2" />
      </div>
          <div className="details">
            <h4>Details</h4>
            <p>Dimensions: 1020 x 1020 pixel</p>
            <p> Size: 15 mb</p>
          </div>
        </div>
   
  );
};

export default ProductDetail;
