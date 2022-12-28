import yellowBlob from '../../assets/yellow-blob.svg'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <img className='App__yellow-blob' src={yellowBlob}/>
      <p className='footer__creds'>
        <a href="https://vshevchenko.netlify.app/" target="_blank">
          Valerii Shevchenko © 2022
        </a> 
      </p>
    </footer>
  )
}

export default Footer