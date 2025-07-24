import React, { useState, useEffect } from 'react';

const CertificatesSection = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch('https://profilharlan.000webhostapp.com/api/get-data');
        if (!response.ok) {
          throw new Error('Failed to fetch certificates');
        }
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error('Error fetching certificates:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <div className="certificates-header-container">
        <span className="Certifi">Loading</span>
        <span className="cates">...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="certificates-header-container">
        <span className="Certifi">Error</span>
        <span className="cates">Loading Certificates</span>
      </div>
    );
  }

  return (
    <>
      <div className="certificates-header-container">
        <span className="Certifi">Certifi</span>
        <span className="cates">cates</span>
      </div>
      
      <div className="certificate-container">
        {certificates.map((certificate) => (
          <div key={certificate.id_certificate} className="certificate-box-container">
            <div className="certificate-preview-container">
              <img 
                src={`https://profilharlan.000webhostapp.com/uploads/${certificate.file}`} 
                alt={`Certificate ${certificate.id_certificate}`}
                onError={(e) => {
                  e.target.src = './profile.jpg'; // Fallback image
                }}
              />
            </div>
            <div className="certificate-content-container">
              <div className="certificate-header-container">
                <span>{certificate.title}</span>
              </div>
              <div className="certificate-date-container">
                <span>{certificate.expired}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CertificatesSection;