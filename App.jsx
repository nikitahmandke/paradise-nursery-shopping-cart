import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image">
            <div className="content">
              <h1 className="company-name">Paradise Nursery</h1>
              <p className="tagline">Where Green Dreams Come True</p>
              <button 
                className="get-started-button" 
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
              <div className="about-us-wrapper" style={{ marginTop: '20px' }}>
                <AboutUs />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
