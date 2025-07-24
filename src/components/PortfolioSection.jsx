import React, { useState, useEffect } from 'react';

const PortfolioSection = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch('https://profilharlan.000webhostapp.com/api/get-data-portfolios');
        if (!response.ok) {
          throw new Error('Failed to fetch portfolios');
        }
        const data = await response.json();
        setPortfolios(data);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  if (loading) {
    return (
      <div className="portfolio-container">
        <div className="portfolio-header-container">
          <span className="Port">Loading</span>
          <span className="folios">...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio-container">
        <div className="portfolio-header-container">
          <span className="Port">Error</span>
          <span className="folios">Loading Portfolios</span>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-header-container">
        <span className="Port">Port</span>
        <span className="folios">folios</span>
      </div>
      
      <div className="portfolio-body-container">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="portfolio-box-container">
            <div className="portfolio-image-container">
              <img 
                src={`https://profilharlan.000webhostapp.com/portfolios/${portfolio.img}`} 
                width="200px" 
                height="110px" 
                alt={portfolio.title}
                onError={(e) => {
                  e.target.src = './profile.jpg'; // Fallback image
                }}
              />
            </div>
            <div className="portfolio-title-container">
              <span>{portfolio.title}</span>
            </div>
            <div className="portfolio-created-date-container">
              <span>{portfolio.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;