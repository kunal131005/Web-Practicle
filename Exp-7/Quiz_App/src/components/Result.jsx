import styled from "styled-components";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const ResultBox = styled.div`
  background: white;
  padding: 20px;
  margin: 40px auto;
  width: 80%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
`;

const RestartButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background: #1976d2;
    cursor: pointer;
  }
`;

export default function Result() {
  const { score, questionsList, restartQuiz } = useContext(QuizContext);

  return (
    <ResultBox>
      <h1>Quiz Finished!</h1>
      <h2>Your Score: {score} / {questionsList.length}</h2>
      <RestartButton onClick={restartQuiz}>Restart Quiz</RestartButton>
    </ResultBox>
  );
}
