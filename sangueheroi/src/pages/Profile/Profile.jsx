import React from 'react';
import styles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import Homebar from "../../components/Homebar/Homebar";

const Profile = () => {
    const navigate = useNavigate();
  
    const handleDataClick = () => {
      navigate('/dados');
    };

    const handleCertifiedClick = () => {
      navigate('/certificados');
    };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1>Perfil</h1>
        <button className={styles.menuButton}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className={styles.profilePicture}>
        <img src="https://avatars.githubusercontent.com/u/102766434?v=4" alt="Foto de Perfil" />
      </div>

      <h2>Rayssa Buarque Malheiros</h2>

      <div className={styles.options}  onClick={handleCertifiedClick}>
        <button className={styles.option}>
          <i className="fas fa-certificate"></i>
          <span>Certificados</span>
        </button>
        <button className={styles.option} onClick={handleDataClick}>
          <i className="fas fa-info-circle"></i>
          <span>Dados</span>
        </button>
        <button className={styles.option}>
          <i className="fas fa-question-circle"></i>
          <span>Dúvidas</span>
        </button>
        <button className={styles.option}>
          <i className="fas fa-life-ring"></i>
          <span>Suporte</span>
        </button>
      </div>
      <Homebar/>
    </div>
  );
};

export default Profile;
