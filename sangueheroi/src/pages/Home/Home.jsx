import React, { useState } from 'react';
import styles from './Home.module.css';
import Homebar from "../../components/Homebar/Homebar";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [showRewards, setShowRewards] = useState(false); // Estado para controlar visibilidade do conteúdo expandido

  const toggleRewards = () => {
    setShowRewards((prev) => !prev); // Alterna entre expandido/recolhido
  };

  const navigate = useNavigate();

  const handleRouteBloodCenter = () => {
    navigate('/hemocentros');
  };

  return (
    <>
      <div className={styles.container}>
        {/* Cabeçalho */}
        <header className={styles.header}>
          <img
            className={styles.profilePic}
            src="https://avatars.githubusercontent.com/u/102766434?v=4"
            alt="Perfil"
          />
          <span className={styles.profileName}>Rayssa Buarque Malheiros</span>
        </header>

        {/* Seção de pontos */}
        <div className={styles.pointsSection} onClick={toggleRewards}>
          <p className={styles.points}>Pontos</p>
          <div className={styles.containerBene}>
            <h1 className={styles.pointsDesc}>100</h1>
            <p>Acumule pontos e troque por benefícios</p>
          </div>
          {showRewards && (
            <div className={styles.expandableContent}>
              <div className={styles.rewardItem}>
                <p>Desconto em Restaurantes</p>
                <button className={styles.rewardButton}>Resgatar</button>
              </div>
              <div className={styles.rewardItem}>
                <p>Cupom para Loja Parceira</p>
                <button className={styles.rewardButton}>Resgatar</button>
              </div>
              <div className={styles.rewardItem}>
                <p>Brindes Exclusivos</p>
                <button className={styles.rewardButton}>Resgatar</button>
              </div>
            </div>
          )}
        </div>

        {/* Seção de doação */}
        <div className={styles.donationSection}>
          <p className={styles.donationText}>Você está apto a doar!</p>
          <p className={styles.paragraph}>
            Faça parte da comunidade que mais doa sangue no Brasil e consiga benefícios exclusivos!
          </p>
          <button className={styles.donationButton}>Ir para doação</button>
        </div>

        {/* Seção Quiz do Bloodinho */}
        <div className={styles.quizSection}>
          <h2 className={styles.quizTitle}>Quiz do Bloodinho</h2>
          <div className={styles.quizScroll}>
            {/* Insira várias imagens dentro do contêiner */}
            <img
              className={styles.quizImage}
              src="../../assets/containerQuiz.svg"
              alt="Bloodinho Quiz"
            />
            <img
              className={styles.quizImage}
              src="../../assets/containerQuiz.svg"
              alt="Bloodinho Quiz"
            />
            <img
              className={styles.quizImage}
              src="../../assets/containerQuiz.svg"
              alt="Bloodinho Quiz"
            />
            <img
              className={styles.quizImage}
              src="../../assets/containerQuiz.svg"
              alt="Bloodinho Quiz"
            />
          </div>
        </div>

        {/* Lista de hemocentros */}
        <div className={styles.hemocenters}>
          <div className={styles.hemocenter} onClick={handleRouteBloodCenter}>
            <p className={styles.hemocenterText}>Hemocentro Campo Limpo</p>
            <button className={styles.routesButton}>Rotas</button>
          </div>
          <div className={styles.hemocenter}>
            <p className={styles.hemocenterText}>Hemocentro Pró-Sangue</p>
            <button className={styles.routesButton}>Rotas</button>
          </div>
          <div className={styles.hemocenter}>
            <p className={styles.hemocenterText}>Hemocentro Pró-Sangue</p>
            <button className={styles.routesButton}>Rotas</button>
          </div>
        </div>
      </div>
      <Homebar />
    </>
  );
}

export default Home;
