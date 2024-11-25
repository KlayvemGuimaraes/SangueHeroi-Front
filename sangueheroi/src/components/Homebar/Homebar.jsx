import React, { useState } from 'react';
import './Homebar.module.css';
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
    <div className="homebar">
      <div
        className="homebar-item"
        style={activeTab === 'Home' ? { color: '#e74c3c', fontWeight: 'bold' } : {}}
        onClick={() => handleTabClick('Home')}
      >
        <img src={homeIcon} alt="Home" className="icon" />
        <span>Home</span>
      </div>
      <div
        className="homebar-item"
        style={activeTab === 'Mapa' ? { color: '#e74c3c', fontWeight: 'bold' } : {}}
        onClick={() => handleTabClick('Mapa')}
      >
        <img src={mapIcon} alt="Mapa" className="icon" />
        <span>Mapa</span>
      </div>
      <div
        className="homebar-item"
        style={activeTab === 'Comunidade' ? { color: '#e74c3c', fontWeight: 'bold' } : {}}
        onClick={() => handleTabClick('Comunidade')}
      >
        <img src={communityIcon} alt="Comunidade" className="icon" />
        <span>Comunidade</span>
      </div>
      <div
        className="homebar-item"
        style={activeTab === 'Perfil' ? { color: '#e74c3c', fontWeight: 'bold' } : {}}
        onClick={() => handleTabClick('Perfil')}
      >
        <img src={profileIcon} alt="Perfil" className="icon" />
        <span>Perfil</span>
      </div>
    </div>
  );
};

export default Homebar;
