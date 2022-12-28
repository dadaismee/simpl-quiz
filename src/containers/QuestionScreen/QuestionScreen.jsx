import './questionScreen.css'
import { QuestionItem, Button } from '../../components'

const QuestionScreen = ({ questions, markAnswer, checkAnswers, isPlaying, allChecked, correctAnswers, showScore, score, resetGame, userAnswers }) => {
  
  const questionElements = questions.map((question, index) => (
    
    <QuestionItem 
      key={question.id}
      question={question.question}
      answers={question.answers}
      correctAnswers={correctAnswers}
      qstIdx={index}
      allChecked={allChecked}
      markAnswer={markAnswer}
      checkAnswers={checkAnswers}
      showScore={showScore}
    />
  ))

  return (
    <section className="questionScreen__container">
      {questionElements}
      <Button 
        text={Boolean(userAnswers) ? "Check answers" : "Reset game"}
        allChecked={allChecked}
        isPlaying={isPlaying}
        checkAnswers={checkAnswers}
        type={allChecked === 3 ? 'default' : 'disabled'}
        resetGame={resetGame}
        userAnswers={userAnswers}
      />
      {Boolean(showScore) && (
        <p>Your score is {score}/3</p>
      )}
    </section>
  )
}

export default QuestionScreen