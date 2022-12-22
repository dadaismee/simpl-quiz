import './App.css'
import { Logo, Button, Footer } from './components/index'
import { Start, QuestionScreen } from './containers/index'

function App() {
  return (
    <main> 
      <Logo />
      <div className='App__container'>
        <Start />
        <Footer />
      </div>
    </main> 
  )
}

export default App
