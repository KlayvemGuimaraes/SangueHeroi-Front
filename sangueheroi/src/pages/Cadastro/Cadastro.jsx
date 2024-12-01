import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importando framer-motion
import styles from './Cadastro.module.css'; // Importando o CSS Module
import dulpaTurmaBloodinho from "../../assets/dulpaTurmaBloodinho.svg"; // Imagem principal
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleGoingLogin = () => {
    navigate('/login'); // Redireciona para a página de login após o cadastro
  };

  // Estados para os campos do formulário
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState(""); // Estado para exibir o erro da senha

  // Função que faz o cadastro
  async function CadastroUser(event) {
    event.preventDefault(); // Previne o recarregamento da página ao enviar o formulário

    // Verifica se todos os campos foram preenchidos
    if (telefone === "" || nome === "" || email === "" || cpf === "" || senha === "") {
      console.log("Complete seus dados!");
      return; // Não continua se algum campo estiver vazio
    }

    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      setErroSenha("A senha deve ter pelo menos 8 caracteres.");
      return; // Não continua se a senha for muito curta
    } else {
      setErroSenha(""); // Limpa o erro caso a senha tenha pelo menos 8 caracteres
    }

    const body = {
      cidade_usuario: null,
      endereco_usuario: null,
      telefone_usuario: telefone,
      nome_usuario: nome,
      email_usuario: email,
      cpf: cpf,
      senha: senha,
    };

    try {
      // Faz a requisição para criar o usuário
      await axios.post("http://localhost:3333/createUser", body);
      handleGoingLogin(); // Redireciona para a página de login após o cadastro bem-sucedido
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
      // Você pode adicionar uma mensagem de erro aqui, caso o cadastro falhe
    }
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, x: 200 }} // Animação de entrada
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }} // Animação de saída
      transition={{ duration: 0.5 }} // Duração da animação
    >
      <div className={styles.header}>
        <img src={dulpaTurmaBloodinho} alt="Motivational" className={styles.image} />
      </div>
      {/* Caixa branca ao redor dos inputs */}
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={CadastroUser}>
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

          {erroSenha && <div style={{ color: 'red' }}>{erroSenha}</div>} {/* Exibe a mensagem de erro se a senha for inválida */}

          <input
            type="text"
            placeholder="Telefone"
            className={styles.input}
            value={telefone}
            onChange={(event) => setTelefone(event.target.value.trimEnd())}
          />

          <button type="submit" className={styles.button}>
            Criar conta
          </button>

          <p className={styles.signupText}>
            Já tem uma conta?{' '}
            <a href="/login" className={styles.signupLink}>Faça login!</a>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default Cadastro;
