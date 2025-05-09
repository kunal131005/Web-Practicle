import { QuizProvider } from "./context/QuizContext";
import GlobalStyles from "./styles/GlobalStyles";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import { useContext } from "react";
import { QuizContext } from "./context/QuizContext";

function AppContent() {
  const { quizFinished } = useContext(QuizContext);

  return (
    <>
      {quizFinished ? <Result /> : <QuestionCard />}
    </>
  );
}

function App() {
  return (
    <QuizProvider>
      <GlobalStyles />
      <AppContent />
    </QuizProvider>
  );
}

export default App;
