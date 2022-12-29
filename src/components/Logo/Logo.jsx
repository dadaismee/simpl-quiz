import "./logo.css"
import { logo } from '../../assets/index'
import OrangeBlob from "../Blobs/OrangeBlob/OrangeBlob"

const Logo = ({ handleClick }) => {
  return (
    <div className="logo__container">
      <img 
        src={logo} 
        alt="logo" 
        className="logo__img"
        onClick={handleClick}
        />
      <OrangeBlob />
    </div>
  )
}

export default Logo