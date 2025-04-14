import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <>
      
        <div className="typewriter-container">
  {/* <div className="typewriter line1"> */}
    <h1>Discover the Essence of Organic Living</h1>< br /> 
    {/* </div> */}
  {/* <div className="typewriter line2"> */}
  <div className='bodcont'>
    <p> Explore a World of Pure, Natural Products </p> <br/>
    <span> Join Us in Embracing a Greener</span>
    {/* , Healthier Lifestyle */}
    </div>
    {/* </div> */}
  {/* <div className="typewriter line3"> */}

    {/* </div> */}
</div>
<Link to="/signup"> <button className="explore-button">LET'S EXPLORE</button>
        </Link>
    </>
  );
};

export default Home;
