import yellowBlob from '../../assets/yellow-blob.svg'
import YellowBlob from '../Blobs/YellowBlob/YellowBlob'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <YellowBlob />
      <p className='footer__creds'>
        <a href="https://vshevchenko.netlify.app/" target="_blank">
          Valerii Shevchenko © 2022
        </a> 
      </p>
    </footer>
  )
}

export default Footer