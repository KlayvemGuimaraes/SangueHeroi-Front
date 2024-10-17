import React from 'react';
import styles from './Register.module.css'; // Importando o CSS Module
import ScreenElements from "../../assets/elementsLogin.png"

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div> {/* Contêiner da imagem de fundo */}
      
      <div className={styles.containerText}>
          <h1 className={styles.titulo}>Login ou cadastro</h1>
          <p>Venha fazer parte da comunidade sanguínea que mais cresce no Brasil!</p>
          <div className={styles.buttonContainer}>
            <button className={styles.register}>Login</button>
            <button className={styles.createAccount}>Criar conta</button>
            <button className={styles.moreLater}>Mais tarde</button>
          </div>
      </div>
    </div>
  );
};

export default Register;
