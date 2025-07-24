import React, { useState } from 'react';

const ContactSection = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = Array.from(e.target.elements).reduce((acc, element) => {
      if (element.name) {
        acc[element.name] = element.value;
      }
      return acc;
    }, {});

    try {
      const response = await fetch('http://127.0.0.1:8000/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Berhasil');
        e.target.reset(); // Reset form
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      } else {
        setStatus('Gagal');
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
      setStatus('Gagal');
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  };

  return (
    <>
      <div className={`response-status ${status === null ? 'hidden' : ''}`}>
        <span>{status}</span>
      </div>
      
      <div className="contact-container">
        <div className="contact-content-container">
          <div className="contact-header-container">
            <span>Contact</span>
          </div>
          
          <div className="contact-body-container">
            <div className="leftside-container">
              <div className="badges">
                <span className="material-symbols-outlined">done_outline</span>
                <span className="desc">Freelance</span>
              </div>
              <div className="badges">
                <span className="material-symbols-outlined">call</span>
                <span className="desc">+62857-5161-6536</span>
              </div>
              <div className="badges">
                <span className="material-symbols-outlined">mail</span>
                <span className="desc">Harlanmuradi@gmail.com</span>
              </div>
            </div>
            
            <div className="rightside-container">
              <form onSubmit={handleSubmit}>
                <div className="input-section">
                  <span>Nama Panjang :</span>
                  <br />
                  <input name="Nama" type="text" placeholder="Nama Panjang" required />
                </div>
                <div className="input-section">
                  <span>Alamat Email :</span>
                  <br />
                  <input name="Email" type="email" placeholder="Alamat Email" required />
                </div>
                <div className="input-section">
                  <span>Subjek :</span>
                  <br />
                  <input name="Subjek" type="text" placeholder="Subjek" required />
                </div>
                <div className="input-section">
                  <span>Pesan :</span>
                  <br />
                  <textarea name="Pesan" cols="30" rows="10" placeholder="Your message..." required></textarea>
                </div>
                <div className="input-section">
                  <button type="submit">Kirim</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;