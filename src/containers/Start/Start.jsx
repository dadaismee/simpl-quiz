import './start.css'
import { Button } from '../../components'

const Start = () => {
  return (
    <section className="start__container">
      <div className="start__text">
        <p>
          <strong>Hi!</strong>
        </p>
        <p>This is a very 
          <span className='start__accent-green'>simple</span> 
          <span className='start__accent-orange'>quiz</span>
          <span className='start__accent-yellow'>app</span>
          </p>
        <p>On each game, it gives you 3 random questions</p>
        <p>
          <strong>Enjoy!</strong>
        </p>
      </div>
      <Button 
        text="Start quiz"
      />
    </section>
  )
}

export default Start