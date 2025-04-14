import { useNavigate } from 'react-router-dom';
import './collecs.css';

const collections= () => {
  const navigate = useNavigate();

  return (
    <div className="collec-det">
      <h1>THIS IS FOODS</h1>
      <button onClick={() => navigate('/collecs/foods')}>FOODS</button>

      <h1>THIS IS PERSONAL CARE</h1>
      <button onClick={() => navigate('/collecs/personal-care')}>PERSONAL CARE</button>

      <h1>This is for household products</h1>
      <button onClick={() => navigate('/collecs/household')}>HOUSEHOLD</button>

      <h1>This IS FOR ORGANIC LIFESTYLE</h1>
      <button onClick={() => navigate('/collecs/lifestyle')}>LIFESTYLE</button>
    </div>
  );
};

export default collections;
