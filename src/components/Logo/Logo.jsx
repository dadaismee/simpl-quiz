import "./logo.css"
import { logo } from '../../assets/index'
import OrangeBlob from "../Blobs/OrangeBlob/OrangeBlob"

const Logo = () => {
  return (
    <div className="logo__container">
      <img src={logo} alt="logo" className="logo__img" />
      <OrangeBlob />
    </div>
  )
}

export default Logo