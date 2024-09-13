import React from 'react';
import Breadcrumb from './BreadCrumb'; // Ensure Breadcrumb is correctly imported
import advert from '../assets/Group 44 (2).png'; // Example image
import EggBallon from '../assets/EggBallon.png';
import Rec1 from '../assets/Recomend.png';
import Rec2 from '../assets/window recoomend.png';
import '../styles/ProductDetails.css'; // Make sure to have this CSS

type ProductDetailProps = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ name, price, description, imageUrl }) => {
  return (
    <div className="product-detail-container">
      {/* Breadcrumb Section */}
      <Breadcrumb categories={['Home', 'Category', 'Subcategory']} currentProduct={name} />
      
      {/* Product Main Section */}
      <div className="product-layout">
        {/* Left: Product Image */}
        <div className="product-main">
          <img src={imageUrl} alt={name} className="product-image" />
          
          {/* Below the image: Product Info */}
          <div className="product-info">
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{description}</p>
          </div>
        </div>

        {/* Right: People Also Buy Section */}
        <div className="similar-products">
          <h2>People also buy:</h2>
          <div className="recommendations">
            <img src={EggBallon} alt="Egg Balloon" />
            <img src={Rec1} alt="Recommendation 1" />
            <img src={Rec2} alt="Recommendation 2" />
          </div>

          {/* Details below the recommendations */}
          <div className="details">
            <h4>Details</h4>
            <p>Dimensions: 1020 x 1020 pixel</p>
            <p>Size: 15 mb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
