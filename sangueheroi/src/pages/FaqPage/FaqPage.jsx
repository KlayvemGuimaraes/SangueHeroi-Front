import React from 'react';
import styles from './FaqPage.module.css';
import Doubts from "../../components/Doubts/Doubts";
import Homebar from "../../components/Homebar/Homebar";
import { useNavigate } from 'react-router-dom';

const FaqPage = () => {
  const navigate = useNavigate()

  const handleFaq = () => {
    navigate('/perfil');
  };
  
    return (
      <div className={styles.pageBackground}>
        <div className={styles.faqPage}>
          <header className="d-flex align-items-center justify-content-between text-white p-3 rounded">
            <i className="bi bi-arrow-left-short" style={{ fontSize: '36px' } } onClick={handleFaq}></i>
              <img
                src="/img/profile.jpg"
                alt="Foto de perfil"
                className="rounded-circle"
                style={{ width: '40px', height: '40px' }}
                
              />
          </header>

          <div className="container bg-white text-center mt-3 rounded-top-5" style={{ height: '600px', width: 'auto' }}>
            <div className="h2" style={{ paddingTop: '10px' }}>Dúvidas Frequentes</div>
        
            <div style={{
              maxHeight: '545px', 
              overflowY: 'scroll',
              padding: '10px',
            }}>
              <Doubts />
            </div>

          </div>
          <Homebar />
        </div>
      </div>
    );
};

export default FaqPage;