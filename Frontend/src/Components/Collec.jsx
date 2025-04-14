import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './collec.css';

const Collec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const collections = [
    { id: 'foods', text: 'Discover the Best Organic Foods for a Healthier You!' },
    { id: 'personal-care', text: 'Pamper Yourself with Nature’s Finest Personal Care Products!' },
    { id: 'household', text: 'Eco-Friendly Household Solutions for a Greener Home!' },
    { id: 'lifestyle', text: 'Elevate Your Lifestyle with Pure Organic Goodness!' }
  ];

  const handleNavigate = (collectionType) => {
    navigate('/collecs/' + collectionType, { state: { collec: collectionType } });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + collections.length) % collections.length);
  };

  return (
    <div className="overlay-container">
      <div className="overlay-item">
        <h1>{collections[currentIndex].text}</h1>
        <button onClick={() => handleNavigate(collections[currentIndex].id)}>VIEW</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrevious}>Previous</button>
      </div>
    </div>
  );
};

export default Collec;
