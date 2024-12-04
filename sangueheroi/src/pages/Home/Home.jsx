import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Homebar from "../../components/Homebar/Homebar";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import QuizBloodinho from "../../assets/ContainerQuiz.svg"
import SaibaMais from "../../assets/ContainerSaibaMais.svg"

function Home() {

  const [nome, setNome] = useState("")
  const [userEmail, setuserEmail] = useState("")

  // Função para obter o valor de um cookie
  function getCookie(nome) {
    const nomeCookie = nome + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(nomeCookie) === 0) {
        return c.substring(nomeCookie.length, c.length);
      }
    }
    return "";
  }
  // GetData faz uma chamada http e coleta os dados do usuário, depois disso ela salva o nome dele na variavel nome
  async function getData() {
    try {
      const res = await axios.get(`http://localhost:3333/user/${userEmail}`);
      if (res.data == null) {
        console.log("Ou o userEmail não foi cadastrado ou deu algo errado!");
      } else {
        setNome(res.data.nome_usuario)
        console.log(
          res.data
        )
      }
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
    }
  }

  useEffect(() => {
    const userCookie = getCookie("Usercookie");
    if (userCookie) {
      setuserEmail(userCookie); // Atualiza o estado com o valor do cookie
    }
  }, []); // Esse efeito roda apenas uma vez, logo após o componente ser montado
  
  useEffect(() => {
    if (userEmail) {
      getData(); // Chama getData sempre que userEmail for atualizado
    }
  }, [userEmail]); // Executa sempre que userEmail mudar

  console.log(userEmail);

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
            src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
            alt="Perfil"
          />
          <span className={styles.profileName}>{nome}</span>
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
          <div className={styles.quizScroll}>
            <img
              className={styles.quizImage}
              src={QuizBloodinho}
              alt="Bloodinho Quiz"
              // colocar um onclick aqui
            />
            <img
              className={styles.quizImage}
              src={SaibaMais}
              alt="SaibaMais"
              // colocar um onclick aqui
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
