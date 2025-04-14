import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Foods from './Components/Foods';
import PersonalCare from './Components/PersonalCare';
import Household from './Components/Household';
import Lifestyle from './Components/Lifestyle';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Sell from './Components/Sell';
import Collec from './Components/Collec';
import AboutUs from './Components/AboutUs';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <Router>
      <Header />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collecs" element={<Collec />} />
        <Route path="/collecs/foods" element={<Foods />} />
        <Route path="/collecs/personal-care" element={<PersonalCare />} />
        <Route path="/collecs/household" element={<Household />} />
        <Route path="/collecs/lifestyle" element={<Lifestyle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
