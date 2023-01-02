import './button.css'

const Button = (props) => {
  
  const styles = `btn btn-${props.type || 'default'}`;
  const handleClick = !props.isPlaying ? 
    props.handleClickStart :
      Boolean(props.showScore) ?
        props.resetGame :
        Boolean(props.allChecked === 3) ?
          props.checkAnswers :
          (e) => e.preventDefault();

  return (
    <button 
      className={styles}
      onClick={handleClick}
      >{props.text}
    </button>
  )
}

export default Button