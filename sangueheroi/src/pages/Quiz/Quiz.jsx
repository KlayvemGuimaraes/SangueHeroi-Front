import React, { useState } from 'react';
import styles from './Quiz.module.css';
import { useNavigate } from 'react-router-dom';

// Questões do quiz
const questions = [
  { question: 'Por onde o sangue se transporta pelo corpo?', options: ['Intestino', 'Artérias', 'Cérebro', 'Sistema Cardiorrespiratório'], correctAnswer: 'Artérias' },
  { question: 'Qual é o maior órgão do corpo humano?', options: ['Pulmão', 'Fígado', 'Coração', 'Pele'], correctAnswer: 'Pele' },
  { question: 'Qual é o nome do osso mais longo do corpo?', options: ['Fêmur', 'Tíbia', 'Úmero', 'Rádio'], correctAnswer: 'Fêmur' },
  { question: 'Quantos dentes permanentes tem um ser humano adulto?', options: ['28', '30', '32', '34'], correctAnswer: '32' },
  { question: 'O coração possui quantas cavidades?', options: ['2', '3', '4', '5'], correctAnswer: '4' },
  { question: 'Qual é a principal função dos glóbulos vermelhos?', options: ['Combater infecções', 'Transportar oxigênio', 'Produzir anticorpos', 'Formar coágulos'], correctAnswer: 'Transportar oxigênio' },
  { question: 'Qual substância é responsável pela cor da pele?', options: ['Melanina', 'Caroteno', 'Colágeno', 'Hemoglobina'], correctAnswer: 'Melanina' },
  { question: 'Onde ocorre a digestão de proteínas?', options: ['Boca', 'Estômago', 'Esôfago', 'Intestino delgado'], correctAnswer: 'Estômago' },
  { question: 'O que é homeostase?', options: ['Equilíbrio interno do corpo', 'Processo de digestão', 'Troca gasosa nos pulmões', 'Regulação da pressão arterial'], correctAnswer: 'Equilíbrio interno do corpo' },
  { question: 'Qual parte do corpo é responsável pela filtragem do sangue?', options: ['Fígado', 'Rins', 'Baço', 'Pulmões'], correctAnswer: 'Rins' },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0); // Contagem de acertos
  const [wrongAnswers, setWrongAnswers] = useState(0);   // Contagem de erros

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleVerify = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setIsCorrect(true);
      setCorrectAnswers(correctAnswers + 1); // Incrementa acertos
    } else {
      setIsCorrect(false);
      setWrongAnswers(wrongAnswers + 1); // Incrementa erros
    }
  };

  const handleContinue = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      navigate('/resultadoquiz', { state: { correctAnswers, wrongAnswers } }); // Passa os resultados para a tela de resultado
    }
  };

  return (
    <div className={styles.container}>
      {/* Barra de Progresso */}
      <div className={styles.header}>
        <button className={styles.backButton}>←</button>
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{
              width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
            }}
          ></div>
        </div>
        <button className={styles.menuButton}>☰</button>
      </div>

      {/* Pergunta */}
      <div className={styles.content}>
        <div className={styles.question}>
          <span>Questão {currentQuestionIndex + 1} de {totalQuestions}</span>
          <h2>{currentQuestion.question}</h2>
        </div>

        {/* Opções */}
        <div className={styles.options}>
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className={`${styles.option} ${selectedOption === option ? styles.selected : ''}`}
              onClick={() => handleOptionClick(option)}
              disabled={isCorrect !== null}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Feedback */}
        <div className={styles.actions}>
          {isCorrect === null && (
            <button
              className={styles.verifyButton}
              onClick={handleVerify}
              disabled={!selectedOption}
            >
              Verificar
            </button>
          )}

          {isCorrect && (
            <div className={styles.feedback}>
              <p className={styles.correctMessage}>Resposta correta!</p>
              <button className={styles.continueButton} onClick={handleContinue}>
                Continuar
              </button>
            </div>
          )}

          {isCorrect === false && (
            <div className={styles.feedback}>
              <p className={styles.wrongMessage}>Resposta errada, tente novamente!</p>
              <button className={styles.retryButton} onClick={handleContinue}>
                Continuar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
