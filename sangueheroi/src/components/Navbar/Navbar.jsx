import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css'; // Importando o CSS Module
import imageNavbar from "../../assets/navbar.png";
import ScreenElements from "../../assets/elements.png";
import { useNavigate } from 'react-router-dom'; // Para navegação

const Navbar = () => {
  const [fadeIn, setFadeIn] = useState(false); // Estado para controlar o fade-in
  const navigate = useNavigate();

  // Aplica o efeito de fade-in após a montagem do componente
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true); // Ativa o fade-in
    }, 100); // Adiciona um pequeno delay antes de ativar a animação (opcional)
  }, []);

  // Função para navegar para outra tela ao clicar
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div
      className={`${styles.container} ${fadeIn ? styles['fade-in'] : ''}`} // Aplica o fade-in quando o estado é verdadeiro
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Define o cursor como pointer para indicar clique
    >
      <img src={ScreenElements} alt="Descrição da Imagem" className={styles.backgroundImage} />
      <img src={imageNavbar} alt="Descrição da Imagem" className={styles.navbarImage} />
      <h1 className={styles.titulo}>Sangue Herói</h1>
    </div>
  );
};

export default Navbar;
