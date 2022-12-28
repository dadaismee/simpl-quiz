import './button.css'

const Button = (props) => {
  
  const styles = `btn btn-${props.type || 'default'}`;
  
  return (
    <button 
      className={styles}
      onClick={ 
        !props.isPlaying ? 
        props.handleClickStart :
          Boolean(props.showScore) ?
            props.resetGame :
            Boolean(props.allChecked === 3) ?
              props.checkAnswers :
              ''
      }
      >{props.text}
    </button>
  )
}

export default Button