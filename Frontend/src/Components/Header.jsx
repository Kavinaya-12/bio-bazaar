import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import './header.css';
import searchicon from '../assets/images/searchIcon.jpg'
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const cart = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <div className="header-container">
      <div className="header-title">BIO <span>BAZAAR</span></div>
      <div className="header-links">
        <Link to="/"><span>Home</span></Link>
      
        {isAuthenticated ? (
          <> 
            <Link to='/aboutus'><span>About US</span></Link>
            <div className="dropdown">
              <span className="dropdown-toggle">Me</span>
              <div className="dropdown-menu">
                <Link to={`/profile/${userId}`}><span>User Profile</span></Link>
                <Link to="/sell"><span>Sell</span></Link>
                <Link to="/cart"><span>Cart ({cart.length})</span></Link>
                <Link to="/wishlist"><span>Wishlist</span></Link>
                <span onClick={handleLogout}>Logout</span>
              </div>
            </div>
            <Link to='/collecs'><span>Collections</span></Link>
          </>
        ) : (
          <>
            <Link to="/login"><span>Login</span></Link>
            <Link to="/signup"><span>Signup</span></Link>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Header;
