import React from 'react';
import styles from './Home.module.css';
import Homebar from "../../components/Homebar/Homebar"

function Home() {
  return (
    <>
    <div className={styles.container}>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <img
          className={styles.profilePic}
          src="https://via.placeholder.com/50"
          alt="Perfil"
        />
        <span className={styles.profileName}>Maria da Silva Peixoto</span>
      </header>

      {/* Seção de pontos */}
      <div className={styles.pointsSection}>
        <p className={styles.points}>100</p>
        <p className={styles.pointsDesc}>Acumule pontos e troque por benefícios</p>
      </div>

      {/* Seção de doação */}
      <div className={styles.donationSection}>
        <p className={styles.donationText}>Você está apto a doar!</p>
        <button className={styles.donationButton}>Ir para doação</button>
      </div>

      {/* Saiba mais */}
      <div className={styles.moreSection}>
        <p className={styles.moreTitle}>Saiba Mais</p>
        <p className={styles.moreDesc}>Empresas e networking</p>
      </div>

      {/* Lista de hemocentros */}
      <div className={styles.hemocenters}>
        <div className={styles.hemocenter}>
          <p className={styles.hemocenterText}>Hemocentro Campo Limpo</p>
          <button className={styles.routesButton}>Rotas</button>
        </div>
        <div className={styles.hemocenter}>
          <p className={styles.hemocenterText}>Hemocentro Pró-Sangue</p>
          <button className={styles.routesButton}>Rotas</button>
        </div>
      </div>
    <Homebar/>
    </div>
    </>
  );
}

export default Home;
