import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importando framer-motion
import styles from './Cadastro.module.css'; // Importando o CSS Module
/*import ScreenElements from "../../assets/ElementsRegister.png"; // Imagem de fundo*/
import dulpaTurmaBloodinho from "../../assets/dulpaTurmaBloodinho.svg"; // Imagem principal
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
 const navigate = useNavigate()

  const handleGoingLogin = () => {
    navigate('/login');
  };

  const [telefone, setTelefone] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")
  
  async function CadastroUser (event) {
    event.preventDefault(); // Previne o recarregamento da página

    const body = {
      cidade_usuario : null,
      endereco_usuario : null,
      telefone_usuario : telefone,
      nome_usuario : nome,
      email_usuario : email,
      cpf : cpf,
      senha : senha
    }

    if(telefone === "" || nome === "" || email === "" || cpf === "" || senha === ""){
      console.log("Complete seus dados!")
    }else{
      const registerUser = await axios.post("http://localhost:3333/createUser", body).then((res)=> {
        handleGoingLogin()
      })
    }
  }

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
          <input 
            type="text" 
            placeholder="Nome" 
            className={styles.input} 
            value={nome}
            onChange={(event) => setNome(event.target.value.trimEnd())}
            />

          <input 
            type="email" 
            placeholder="E-mail" 
            className={styles.input} 
            value={email}
            onChange={(event) => setEmail(event.target.value.trimEnd())}
          />

          <input 
            type="text" 
            placeholder="CPF" 
            className={styles.input} 
            value={cpf}
            onChange={(event) => setCpf(event.target.value.trimEnd())}
          />

          <input 
            type="password" 
            placeholder="Senha" 
            className={styles.input} 
            value={senha}
            onChange={(event) => setSenha(event.target.value.trimEnd())}
          />

          <input 
            type="text" 
            placeholder="Telefone" 
            className={styles.input} 
            value={telefone}
            onChange={(event) => setTelefone(event.target.value.trimEnd())}
          />
          
          <button type="submit" className={styles.button} onClick={CadastroUser}>Entrar</button>
          <p className={styles.signupText}>
            Você já tem uma conta? <a href="/login" className={styles.signupLink}>Faça login!</a>
          </p>
        </form>
      </div>
    </motion.div>
  );
}

export default Cadastro;
