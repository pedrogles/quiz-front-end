import { useState } from "react";
import { questionOne, questionTwo, questionThree } from "./utils/questions";

import Answers from "./components/Answers/Answers";
import Initiation from "./components/initiation/Initiation";
import Result from "./components/Result/Result";
import QuestionsTemplate from "./components/QuestionsTemplate/QuestionsTemplate";

import "./styles/app.scss";

function App() {
  const [answers, setAnswer] = useState([]);
  const [note, setNote] = useState(0);
  const [result, setResult] = useState("");

  const handdleInitiation = () => {
    const initiation = document.querySelector(".initiation");
    const questionOne = document.querySelector(".question-one");
    initiation.style.display = "none";
    questionOne.style.display = "flex";
  };
  const handdleAnswerOne = () => {
    const items = document.querySelector(".question-one .alternatives");
    const questionOne = document.querySelector(".question-one");
    const questionTwo = document.querySelector(".question-two");
    const answeredQuestions = document.querySelector(".answers");
    items.addEventListener('click', event => {
        setAnswer([`#1 - ${event.target.innerText}`]);
        if(event.target.innerText === "B) Uma parte do sistema que é visivel e interativa com o usuário.") {
        setNote(note + 1);
        }
        questionOne.style.display = "none";
        questionTwo.style.display = "flex";
        answeredQuestions.style.display = "flex";
    });
  };
  const handdleAnswerTwo = () => {
      const items = document.querySelector(".question-two .alternatives");
      const questionTwo = document.querySelector(".question-two");
      const questionThree = document.querySelector(".question-three");
      items.addEventListener('click', event => {
          setAnswer([...answers, `#2 - ${event.target.innerText}`]);
          if(event.target.innerText === "A) Uma poderosa biblioteca JavaScript.") {
          setNote(note + 1);
          }
          questionTwo.style.display = "none";
          questionThree.style.display = "flex";
      });
  };
  const handdleAnswerThree = () => {
      const items = document.querySelector(".question-three .alternatives");
      const questionThree = document.querySelector(".question-three");
      const result = document.querySelector(".result");
      items.addEventListener('click', event => {
          setAnswer([...answers, `#3 - ${event.target.innerText}`]);
          if(event.target.innerText === "D) HTML, CSS e JavaScript.") {
          setNote(note + 1);
          }
          questionThree.style.display = "none";
          result.style.display = "flex";
      });
  };
  const handdleResult = () => {
    const resultButton = document.querySelector(".result-button");
    const resultFinal = document.querySelector(".result-final");
    resultButton.style.display = "none";
    resultFinal.style.display = "flex";
    if(note === 0) {
      setResult("Parabéns, você errou todas.")
    }
    else if(note === 1) {
      setResult("Você acertou 1.")
    }
    else if(note === 2) {
      setResult("Boa, você acertou 2.")
    }
    else if(note === 3) {
      setResult("Parabéns, você acertou todas!!")
    }
  }
  const handdleRestart = () => {
    const answeredQuestions = document.querySelector(".answers");
    const initiation = document.querySelector(".initiation");
    const resultComponent = document.querySelector(".result");
    answeredQuestions.style.display = "none";
    initiation.style.display = "flex";
    resultComponent.style.display = "none";
    location.reload()
    setAnswer([]);
    setNote(0);
    setResult("");
  }
  return (
    <div id="app">
      <Initiation 
        className="initiation" 
        func={handdleInitiation}
      />
      <QuestionsTemplate 
        className="question-one" 
        question={questionOne.title} 
        alternatives={questionOne.alternatives} 
        func={handdleAnswerOne}
      />
      <QuestionsTemplate 
        className="question-two" 
        question={questionTwo.title} 
        alternatives={questionTwo.alternatives} 
        func={handdleAnswerTwo}
      />
      <QuestionsTemplate 
        className="question-three" 
        question={questionThree.title} 
        alternatives={questionThree.alternatives} 
        func={handdleAnswerThree}
      />
      <Answers 
        className="answers" 
        answers={answers}
      />
      <Result 
        className="result" 
        result={result} 
        func={handdleResult} 
        func2={handdleRestart} 
      />
    </div>
  )
}

export default App
