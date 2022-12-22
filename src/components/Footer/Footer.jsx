import yellowBlob from '../../assets/yellow-blob.svg'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer__container">
      <img className='App__yellow-blob' src={yellowBlob}/>
    </footer>
  )
}

export default Footer