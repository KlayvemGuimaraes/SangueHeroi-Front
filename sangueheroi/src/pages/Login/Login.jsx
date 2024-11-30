import React from 'react';
import { motion } from 'framer-motion'; // Biblioteca de animação
import styles from './Login.module.css'; // CSS Module importado
import dulpaTurmaBloodinho from "../../assets/dulpaTurmaBloodinho.svg"; // Imagem principal

const Login = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, x: 200 }} // Animação inicial
      animate={{ opacity: 1, x: 0 }} // Animação ao montar
      exit={{ opacity: 0, x: -200 }} // Animação ao desmontar
      transition={{ duration: 0.5 }} // Configuração de tempo
    >
      <div className={styles.header}>
        <img src={dulpaTurmaBloodinho} alt="Motivational" className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="password" placeholder="Senha" className={styles.input} />
          <button type="submit" className={styles.button}>Entrar</button>
          <p className={styles.signupText}>
            Não tem uma conta?{' '}
            <a href="/cadastro" className={styles.signupLink}>Faça seu cadastro!</a>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
