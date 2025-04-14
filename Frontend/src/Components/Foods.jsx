// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { addToCart } from '../redux/cartSlice';
// // import { addToWishlist,removeFromWishlist } from '../redux/wishlistSlice';
// // import { Navigate, useNavigate } from 'react-router-dom';
// // import './collecs.css';

// // const Foods = () => {
// //   const dispatch = useDispatch();
// //   const products = useSelector((state) => state.products.foods);
// //   const wishlist = useSelector((state) => state.wishlist.items)

// //   const handleAddToCart = (product) => {
// //     dispatch(addToCart(product));
// //   };

// //   const handleAddToWishlist = (product) => {
// //     dispatch(addToWishlist(product));
// //   }
// //   const handleRemoveFromWishList = (id) =>{
// //     dispatch(removeFromWishlist(id));
// //   }
// //  const handlegotocart = () => {
// //   Navigate('/cart');
// //  }
// //   return (
// //     <div className="products-container">
// //       <h1>Foods</h1>
// //       <div className="product-grid">
// //         {products.map((product) => (
// //           <div key={product.id} className="product-card">
// //             <img src={product.image} alt={product.name} />
// //             <h3>{product.name}</h3>
// //             <p>${product.price.toFixed(2)}</p>
            
// //             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
// //             {wishlist.some(item => item.id === product.id) ? (
// //               <button onClick={()=> handleRemoveFromWishList(product)}>Remove from Wishlist</button>
// //             ):(
// //               <button onClick={()=>handleAddToWishlist(product)}>Add ToWishlist</button>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Foods;





// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addToCart } from '../redux/cartSlice';
// import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';
// import './collec.css';

// const Foods = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const products = useSelector((state) => state.products.foods);
//   const wishlist = useSelector((state) => state.wishlist.items);
//   const [addedToCart, setAddedToCart] = useState({});

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     setAddedToCart((prevState) => ({
//       ...prevState,
//       [product.id]: true,
//     }));
//   };

//   const handleGoToCart = () => {
//     navigate('/cart');
//   };

//   const handleAddToWishlist = (product) => {
//     dispatch(addToWishlist(product));
//   };

//   const handleRemoveFromWishList = (id) => {
//     dispatch(removeFromWishlist(id));
//   };

//   return (
//     <div className="products-container">
//       <h1>Foods</h1>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>${product.price.toFixed(2)}</p>
//             {addedToCart[product.id] ? (
//               <button onClick={handleGoToCart}>Go to Cart</button>
//             ) : (
//               <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//             )}
//             {wishlist.some(item => item.id === product.id) ? (
//               <button onClick={() => handleRemoveFromWishList(product.id)}>Remove from Wishlist</button>
//             ) : (
//               <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Foods;


// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addToCart } from '../redux/cartSlice';
// import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';

// const Foods = ({ collec }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const [products, setProducts] = useState([]);
  
//   const [addedToCart, setAddedToCart] = useState({});
  
//   const wishlist = useSelector((state) => state.wishlist.items);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/products/collection/${collec}`);
//         const data = await response.json();
//         console.log(data);
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [collec]);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     setAddedToCart((prevState) => ({
//       ...prevState,
//       [product._id]: true, // Assuming product._id is the unique identifier
//     }));
//   };

//   const handleGoToCart = () => {
//     navigate('/cart');
//   };

//   const handleAddToWishlist = (product) => {
//     dispatch(addToWishlist(product));
//   };

//   const handleRemoveFromWishList = (id) => {
//     dispatch(removeFromWishlist(id));
//   };

//   return (
//     <div className="products-container">
//       <h1>{collec} Products</h1>
//       <div className="product-grid">
//   {products.length === 0 ? (
//     <p>No products found.</p>
//   ) : (
//     products.map((product) => (
//       <div key={product._id} className="product-card">
//         <img src={`/uploads/${product.image}`} alt={product.name} />
//         <h3>{product.name}</h3>
//         <p>${product.price.toFixed(2)}</p>
//         {addedToCart[product._id] ? (
//           <button onClick={handleGoToCart}>Go to Cart</button>
//         ) : (
//           <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//         )}
//         {wishlist.some(item => item._id === product._id) ? (
//           <button onClick={() => handleRemoveFromWishList(product._id)}>Remove from Wishlist</button>
//         ) : (
//           <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
//         )}
//       </div>
//     ))
//   )}
// </div>

//     </div>
//   );
// };

// export default Foods;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';
import { ORGANICFOODS } from '../constants';
import './product.css';

const Foods = () => {
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
      <h1>Food Products</h1>
      <div className="product-grid">
        {ORGANICFOODS.length === 0 ? (
          <p>No products found.</p>
        ) : (
          ORGANICFOODS.map((product) => (
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

export default Foods;

