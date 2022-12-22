import "./logo.css"
import { logo, orangeBlob } from '../../assets/index'

const Logo = () => {
  return (
    <div className="logo__container">
      <img src={logo} alt="logo" className="logo__img" />
      <img className='App__orange-blob' src={orangeBlob} />
    </div>
  )
}

export default Logo