import './questionItem.css'
import ButtonQuiz from '../ButtonQuiz/ButtonQuiz'

const QuestionItem = ({ question, answers, qstIdx, markAnswer, isPlaying, allChecked, correctAnswers, showScore, userAnswers }) => {  
  const answerButtons = answers.map((answer, index) => (
    <ButtonQuiz 
      key={index}
      type={answer.isChecked ? 'quiz-selected' : 'quiz'}
      isChecked={answer.isChecked}
      text={answer.value} 
      qstIdx={qstIdx}
      answIdx={index}
      markAnswer={markAnswer}
      isPlaying={isPlaying}
      allChecked={allChecked}
      correctAnswer={correctAnswers[qstIdx]}
      showScore={showScore}
      userAnswers={userAnswers}
      />
  ))
  
  return (
    <div className="questionItem__container">
      <h1 
      // Disabled h1
      className='questionItem__question'
      >
      {question}
      </h1>
      <div className="questionItem__answer-container">
        {answerButtons}
      </div>
    </div>
  )
}

export default QuestionItem