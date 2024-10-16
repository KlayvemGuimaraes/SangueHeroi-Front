import React from 'react';
import styles from './Navbar.module.css'; // Importando o CSS Module

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Olá, este é o MeuComponente!</h1>
      <button className={styles.botao}>Clique Aqui</button>
    </div>
  );
};

export default Navbar;
