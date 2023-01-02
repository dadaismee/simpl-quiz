import './score.css'

const Score = ({ score }) => {
  
  const styles = `score-${score || 1}`;
  
  return (
    <div className="score__container">
      <p>You scored
        <span className={styles + ' score__number'}>{score}/3</span>
        correct answers
      </p>
    </div>
  )
}

export default Score