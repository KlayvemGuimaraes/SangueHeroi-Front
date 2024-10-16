import React from 'react';
import styles from './Navbar.module.css'; // Importando o CSS Module
import imageNavbar from "../../assets/navbar.png";
import ScreenElements from "../../assets/elements.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={ScreenElements} alt="Descrição da Imagem" className={styles.backgroundImage} /> {/* Imagem de fundo */}
      <img src={imageNavbar} alt="Descrição da Imagem" className={styles.navbarImage} /> {/* Navbar em cima */}
      <h1 className={styles.titulo}>Sangue Herói</h1>
    </div>
  );
};

export default Navbar;
