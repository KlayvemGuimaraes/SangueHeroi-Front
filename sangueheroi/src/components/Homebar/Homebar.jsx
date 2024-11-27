import React, { useState } from 'react';
import styles from './Homebar.module.css'; // Importa o CSS
import homeIcon from '../../assets/Homebar/homeIcon.svg';
import mapIcon from '../../assets/Homebar/mapIcon.svg';
import communityIcon from '../../assets/Homebar/communityIcon.svg';
import profileIcon from '../../assets/Homebar/profileIcon.svg';

const Homebar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.homebar}>
      <div
        className={`${styles['homebar-item']} ${
          activeTab === 'Home' ? styles['homebar-item-active'] : ''
        }`}
        onClick={() => handleTabClick('Home')}
      >
        <img src={homeIcon} alt="Home" className={styles.icon} />
        <span>Home</span>
      </div>
      <div
        className={`${styles['homebar-item']} ${
          activeTab === 'Mapa' ? styles['homebar-item-active'] : ''
        }`}
        onClick={() => handleTabClick('Mapa')}
      >
        <img src={mapIcon} alt="Mapa" className={styles.icon} />
        <span>Mapa</span>
      </div>
      <div
        className={`${styles['homebar-item']} ${
          activeTab === 'Comunidade' ? styles['homebar-item-active'] : ''
        }`}
        onClick={() => handleTabClick('Comunidade')}
      >
        <img src={communityIcon} alt="Comunidade" className={styles.icon} />
        <span>Comunidade</span> 
      </div>
      <div
        className={`${styles['homebar-item']} ${
          activeTab === 'Perfil' ? styles['homebar-item-active'] : ''
        }`}
        onClick={() => handleTabClick('Perfil')}
      >
        <img src={profileIcon} alt="Perfil" className={styles.icon} />
        <span>Perfil</span>
      </div>
    </div>
  );
};

export default Homebar;
