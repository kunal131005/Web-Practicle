import styled from "styled-components";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Card = styled.div`
  background: white;
  padding: 20px;
  margin: 40px auto;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
`;

const OptionButton = styled.button`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background: #45a049;
    cursor: pointer;
  }
`;

export default function QuestionCard() {
  const { questionsList, currentQuestion, handleAnswer } = useContext(QuizContext);

  const questionObj = questionsList[currentQuestion];

  return (
    <Card>
      <h2>{questionObj.question}</h2>
      {questionObj.options.map((option, idx) => (
        <OptionButton key={idx} onClick={() => handleAnswer(option)}>
          {option}
        </OptionButton>
      ))}
    </Card>
  );
}
