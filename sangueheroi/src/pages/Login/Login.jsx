import React from 'react';
import { motion } from 'framer-motion'; // Importando framer-motion
import styles from './Login.module.css'; // Importando o CSS Module
/*import ScreenElements from "../../assets/ElementsRegister.png"; // Imagem de fundo*/
import Network from "../../assets/RegisterNetwork.png"; // Imagem principal

const Login = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, x: 200 }} // Animação de entrada
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }} // Animação de saída
      transition={{ duration: 0.5 }} // Duração da animação
      /*style={{ backgroundImage: `url(${ScreenElements})` }} // Usar a imagem de fundo*/
    >
      <div className={styles.header}>
        <img src={Network} alt="Motivational" className={styles.image} />
      </div>
      {/* Caixa branca ao redor dos inputs */}
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Nome" className={styles.input} />
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="text" placeholder="CPF" className={styles.input} />
          <input type="password" placeholder="Senha" className={styles.input} />
          <button type="submit" className={styles.button}>Login</button>
          <p className={styles.signupText}>
            Você não tem uma conta? <a href="/cadastro" className={styles.signupLink}>Cadastre-se</a>
          </p>
        </form>
      </div>
    </motion.div>
  );
}

export default Login;
