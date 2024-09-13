import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/ProductGrid.css';

interface Product {
  name: string;
  price: string;
  imageUrl: string;
  isBestseller?: boolean;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { addToCart } = useCart();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Slice products for the current page
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <section className="product-grid">
        {paginatedProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
            {product.isBestseller && <span className="bestseller">Bestseller</span>}
          </div>
        ))}
      </section>
      <div className="pagination">
        <button 
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span className="pagination-info">Page {currentPage} of {totalPages}</span>
        <button 
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
