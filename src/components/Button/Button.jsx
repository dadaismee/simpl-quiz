import './button.css'

const Button = (props) => {
  
  const styles = `btn btn-${props.type || 'default'}`;
  
  return (
    <button 
      className={styles}
      onClick={ !props.isPlaying ? 
        props.handleClickStart :
          Boolean(props.userAnswers) ?
          props.checkAnswers :
          props.resetGame
         }
      >{props.text}
    </button>
  )
}

export default Button