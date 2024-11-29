import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResultQuiz.module.css';

const ResultScreen = () => {
  const navigate = useNavigate();

  // Aqui você pode usar um estado global ou um contexto para obter os valores
  const correctAnswers = 2;  // Exemplo
  const incorrectAnswers = 1;  // Exemplo

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className="resultScreen">
      <h1>Parabéns!</h1>
      <p>Você concluiu o quiz com sucesso.</p>
      <p>Respostas corretas: {correctAnswers}</p>
      <p>Respostas erradas: {incorrectAnswers}</p>
      <img
        src="placeholder-for-mascot.png"  // Substitua pelo caminho correto da imagem
        alt="Mascote Booal"
        className="mascotImage"
      />
      <button className="continueButton" onClick={handleBackToHome}>
        Voltar para a Home
      </button>
    </div>
  );
};

export default ResultScreen;


