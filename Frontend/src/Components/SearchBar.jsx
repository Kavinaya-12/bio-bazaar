import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/productSlice';
import Searchicon from '../assets/images/searchIcon.jpg'; 
import './searchbar.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchText(event.target.value || '');
  };

  const handleSearch = () => {
    console.log("Searching for:", searchText.trim());
    dispatch(searchProduct(searchText.trim()));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="primary-btn-inline" onClick={handleSearch}>
        <img src={Searchicon} alt="search icon" /> search
      </button>
    </div>
  );
};

export default SearchBar;