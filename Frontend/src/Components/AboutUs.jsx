import React from 'react';
import './aboutus.css'; // Ensure you create and include the relevant CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="intro-section">
        <h1>About Us</h1>
        <p>We are dedicated to providing the finest organic products for a healthier lifestyle. Our mission is to bring you the best from nature, straight to your doorstep.</p>
      </section>
      
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://tse4.mm.bing.net/th?id=OIP.0A1RSeVHV4YfoDGR2jUvHwHaHa&pid=Api&P=0&h=180" alt="Team Member 1" />
          <div className="team-info">
            <h3>kavi</h3>
            <p>Entreprenur</p>
            <p> passionate about organic farming and ensuring our products are the best they can be.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://tse1.explicit.bing.net/th?id=OIP.L2mDCrdkEl6JYf-qu6vV1gHaHa&pid=Api&P=0&h=180" alt="Team Member 2" />
          <div className="team-info">
            <h3>Priya Dharshini</h3>
            <p>Entreprenur</p>
            <p> oversees the quality and selection of our products, ensuring they meet our high standards.</p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <img src="path/to/mission-image.jpg" alt="Our Mission" />
        <p>Our mission is to revolutionize the way people think about organic products. We strive to make organic options accessible and affordable for everyone.</p>
      </section>
    </div>
  );
};

export default AboutUs;
