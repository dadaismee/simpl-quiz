import './App.css'
import { useState, useEffect } from 'react'
import { Logo, Footer } from './components/index'
import { Start, QuestionScreen } from './containers/index'
import Confetti from 'react-confetti'


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [allAnswersChecked, setAllAnswersChecked] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const MAX_QUESTIONS = 3;
  
  useEffect(() => {
    fetchQuestions();
  }, []);
  
  useEffect(() => {
    setAllAnswersChecked(() => {
      let count = 0;
      questions.map(q => {
        let temp = q.answers.filter(a => a.isChecked).length;
        count += temp;
      });
      return count;
    })
    setCorrectAnswers(() => questions.map(q => q.correct));
  }, [questions]);
  
  useEffect(() => {
    scorePlayer(correctAnswers, userAnswers)
  }, [correctAnswers, userAnswers])
  
  function fetchQuestions() {
    fetch('https://opentdb.com/api.php?amount=3&encode=url3986')
      .then(res => res.json())
      .then(data => {
        const response = data.results;
        let fetchedQuestions = [];

        response.forEach((item, index) => {
          const {
            question,
            correct_answer: correct,
            incorrect_answers: wrong
          } = item;

          const randomIndex = Math.floor(Math.random() * wrong.length);
          let randomizedAnswers = [...wrong];
          randomizedAnswers.splice(randomIndex, 0, correct);

          const answers = randomizedAnswers.map(answ => ({
            value: answ,
            isChecked: false
          }));

          const questionObj = {
            question: decodeURIComponent(question),
            correct: decodeURIComponent(correct),
            answers: answers,
            index: index
          }

          fetchedQuestions.push(questionObj);
        })
        setQuestions(fetchedQuestions);
      })
  }
  
  function togglePlaying() {
    setIsPlaying(() => true);
  }

  function notPlaying() {
    setIsPlaying(() => false);
    resetGame();
  }

  function markAnswer(e, qstIdx, answIdx) {
    e.preventDefault();

    setQuestions(prevState => {
			let newState = [...prevState];
      
			newState[qstIdx].answers.map((answer, index) => {
        if (index === answIdx) {
					answer.isChecked = true;
				} else {
					answer.isChecked = false;
				}
			});
      return newState;
		});
  }
  
  function scorePlayer(corrAnsw, userAnsw) {
    const answersCorrect = [];
    setScore(() => {
      let newScore = 0;
      for (let i = 0; i < corrAnsw.length; i++) {
        if (corrAnsw[i] === userAnsw[i]) {
          newScore += 1;
          answersCorrect.push(true);
        } else {
          answersCorrect.push(false);
        }
      };
      return newScore;
    })
  }
  
  function checkAnswers() {
    setUserAnswers(() => {
      const userAns = [];
      
      questions.map(q => {
        q.answers.map(a => {
          if (a.isChecked) {
            userAns.push(decodeURIComponent(a.value))
          };
        })
      })
      return userAns;
    })
    setShowScore(true);
  }

  function resetGame() {
    setShowScore(() => false)
    fetchQuestions();
  }
  
  return (
    <div className='App__container'>
      {score === MAX_QUESTIONS && <Confetti />}
      <Logo 
        handleClick={notPlaying}
      />
      {isPlaying ? 
        <QuestionScreen 
          questions={questions}
          allChecked={allAnswersChecked}
          isPlaying={isPlaying}
          correctAnswers={correctAnswers}
          showScore={showScore}
          score={score}
          resetGame={resetGame}
          markAnswer={markAnswer}
          checkAnswers={checkAnswers}
          userAnswers={userAnswers}
        /> : 
        <Start 
          handleClick={togglePlaying} 
          isPlaying={isPlaying}
        />}
      <Footer />  
    </div>
  )
}

export default App
