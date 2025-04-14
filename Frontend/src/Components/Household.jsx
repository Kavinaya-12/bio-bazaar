import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';
import { ORGANICHOUSEHOLD } from '../constants';
import './collec.css';

const Household = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [addedToCart, setAddedToCart] = useState({});
  const wishlist = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product._id || product.id]: true,
    }));
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const getImageSrc = (product) => {
    if (product.image.startsWith('http')) {
      return product.image;
    }
    return `http://localhost:8000${product.image}`;
  };

  return (
    <div className="products-container">
      <h1>Household Products</h1>
      <div className="product-grid">
        {ORGANICHOUSEHOLD.length === 0 ? (
          <p>No products found.</p>
        ) : (
          ORGANICHOUSEHOLD.map((product) => (
            <div key={product._id || product.id} className="product-card">
              <img 
                src={getImageSrc(product)} 
                alt={product.name} 
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              {addedToCart[product._id || product.id] ? (
                <button onClick={handleGoToCart}>Go to Cart</button>
              ) : (
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}
              {wishlist.some((item) => item._id === product._id) ? (
                <button onClick={() => handleRemoveFromWishlist(product._id)}>Remove from Wishlist</button>
              ) : (
                <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Household;
