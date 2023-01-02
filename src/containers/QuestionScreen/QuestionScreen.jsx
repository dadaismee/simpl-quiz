import './questionScreen.css'
import { QuestionItem, Button, Score } from '../../components'
import { nanoid } from 'nanoid'

const QuestionScreen = (props) => {
  
  const questionElements = props.questions.map((question, index) => (
    
    <QuestionItem 
      key={nanoid()}
      question={question.question}
      answers={question.answers}
      correctAnswers={props.correctAnswers}
      qstIdx={index}
      allChecked={props.allChecked}
      markAnswer={props.markAnswer}
      checkAnswers={props.checkAnswers}
      showScore={props.showScore}
    />
  ))

  return (
    <main className="questionScreen__container">
      {questionElements}
      <div className="questionScreen__button-score-area">
        {Boolean(props.showScore) && (
          <Score 
            score={props.score}
          />
        )}
        <Button 
          text={Boolean(props.showScore) ? "Replay" : "Check answers"}
          allChecked={props.allChecked}
          isPlaying={props.isPlaying}
          checkAnswers={props.checkAnswers} 
          type={props.allChecked === 3 ? 'default' : 'disabled'}
          resetGame={props.resetGame}
          showScore={props.showScore}
          userAnswers={props.userAnswers}
          maxQuestions={props.maxQuestions}
        />
      </div>
    </main>
  )
}

export default QuestionScreen