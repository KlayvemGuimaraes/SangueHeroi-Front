import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DataUser.module.css';
import Homebar from "../../../components/Homebar/Homebar"

const UserDataScreen = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={handleBackClick}>
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

      <div className={styles.userInfo}>
        <div className={styles.infoItem}>
            <span className={styles.label}>Nome:</span>
            <span className={styles.value}>Maria da Silva</span>
            </div>
            <div className={styles.infoItem}>
            <span className={styles.label}>Data Nasc.:</span>
            <span className={styles.value}>10/11/1997</span>
            </div>
            <div className={styles.infoItem}>
            <span className={styles.label}>CPF:</span>
            <span className={styles.value}>123.456.789-00</span>
            </div>
            <div className={styles.infoItem}>
            <span className={styles.label}>Cidade:</span>
            <span className={styles.value}>São Paulo</span>
            </div>
            <div className={styles.infoItem}>
            <span className={styles.label}>Peso:</span>
            <span className={styles.value}>74kg</span>
            </div>
            <div className={styles.infoItem}>
            <span className={styles.label}>Tipo sanguíneo:</span>
            <span className={styles.value}>A+</span>
            </div>
            <div className={styles.infoItem}>
            <span className={styles.label}>Sexo:</span>
            <span className={styles.value}>Feminino</span>
            </div>
            <div className={styles.infoItem}>
            <span className={styles.label}>Celular:</span>
            <span className={styles.value}>(11) 7777-7777</span>
            </div>
            <div className={styles.infoItem}>
            <span className={styles.label}>E-mail:</span>
            <span className={styles.value}>rayssabuarque@silva.com</span>
            </div>
      </div>
      <Homebar/>
    </div>
  );
};

export default UserDataScreen;
