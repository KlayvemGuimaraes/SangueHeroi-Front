// Arquivo: HemoCentroScreen.js
import React from 'react';
import styles from './RouteBloodCenter.module.css';
import Homebar from "../Homebar/Homebar"

const HemoCentroScreen = () => {

  const handleBloodCenter = () => {
    window.location.href = 'https://www.prosangue.sp.gov.br/doacao/Agende.html'; // Pode substituir por qualquer link
  }

  return (
    <>
        <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.backButton}>
            <i className="fas fa-arrow-left"></i>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sangue.jpg" alt="Hemocentro Unifesp" className={styles.image} />
                </div>
                <h1 className={styles.title}>Hemocentro Unifesp</h1>

                <div className={styles.timeRange}>
                <span>8:30 ds 23:30</span>
                </div>
                <div className={styles.recommendations}>
                <span>Recomendações</span>
                </div>
                <div className={styles.idDocumentText}>
                <span>Leve apenas documento de identificação com foto</span>
                </div>
                
                <button className={styles.scheduleButton} onClick={handleBloodCenter}>Agendar</button>
            </div>
        </div>
    <Homebar/>
    </>
  );
};

export default HemoCentroScreen;
