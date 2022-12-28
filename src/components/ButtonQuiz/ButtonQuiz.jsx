import '../Button/button.css'

const ButtonQuiz = (props) => {
  const answer = decodeURIComponent(props.text);
  let styles = `btn btn-${props.type} `;
  let color = {
    backgroundColor: '#000'
  }

  return (
    <div>
      {Boolean(props.showScore) ? (
        <button 
          className={props.isChecked && answer === props.correctAnswer ? 
            styles + ' btn-correct' :
            styles + ' '
          }>
        {answer}
        </button>
        ) : (
        <button
          className={styles}
          onClick={(e) => props.markAnswer(e, props.qstIdx, props.answIdx)}
        >
          {answer}
        </button>
        )
      }
    </div>
  )
}

export default ButtonQuiz