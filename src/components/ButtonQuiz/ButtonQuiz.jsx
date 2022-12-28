import '../Button/button.css'

const ButtonQuiz = (props) => {
  const answer = decodeURIComponent(props.text);
  let styles = `btn btn-${props.type} `;

  return (
    <div>
      {Boolean(props.showScore) ? (
        <button 
          className={answer === props.correctAnswer ? 
            'btn btn-correct':
            styles
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