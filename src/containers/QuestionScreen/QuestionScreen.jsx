import './questionScreen.css'
import { QuestionItem, Button, Score } from '../../components'

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
      <div className="questionScreen__button-score-area">
        {Boolean(showScore) && (
          <Score 
            score={score}
          />
        )}
        <Button 
          text={Boolean(showScore) ? "Replay" : "Check answers"}
          allChecked={allChecked}
          isPlaying={isPlaying}
          checkAnswers={checkAnswers} 
          type={allChecked === 3 ? 'default' : 'disabled'}
          resetGame={resetGame}
          showScore={showScore}
          userAnswers={userAnswers}
        />
      </div>
    </section>
  )
}

export default QuestionScreen