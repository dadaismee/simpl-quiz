import './button.css'

const Button = (props) => {
  return (
    <button 
      type='button'
      className='button shadow-drop-2-center'>{props.text}
    </button>
  )
}

export default Button