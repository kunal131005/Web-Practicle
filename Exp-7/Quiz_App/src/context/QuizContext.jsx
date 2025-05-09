import { createContext, useState } from "react";

export const QuizContext = createContext();

const questionsList = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Tolstoy", "Hemingway", "Rowling"],
    answer: "Shakespeare"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

export function QuizProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questionsList[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questionsList.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <QuizContext.Provider value={{
      questionsList,
      currentQuestion,
      score,
      quizFinished,
      handleAnswer,
      restartQuiz
    }}>
      {children}
    </QuizContext.Provider>
  );
}
