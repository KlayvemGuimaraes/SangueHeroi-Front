import React from 'react';
import { motion } from 'framer-motion'; // Importando framer-motion
import styles from './Cadastro.module.css'; // Importando o CSS Module
/*import ScreenElements from "../../assets/ElementsRegister.png"; // Imagem de fundo*/
import dulpaTurmaBloodinho from "../../assets/dulpaTurmaBloodinho.svg"; // Imagem principal

const Cadastro = () => {
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
        <img src={dulpaTurmaBloodinho} alt="Motivational" className={styles.image} />
      </div>
      {/* Caixa branca ao redor dos inputs */}
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Nome" className={styles.input} />
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="text" placeholder="CPF" className={styles.input} />
          <input type="password" placeholder="Senha" className={styles.input} />
          <button type="submit" className={styles.button}>Entrar</button>
          <p className={styles.signupText}>
            Você já tem uma conta? <a href="/login" className={styles.signupLink}>Faça login!</a>
          </p>
        </form>
      </div>
    </motion.div>
  );
}

export default Cadastro;
