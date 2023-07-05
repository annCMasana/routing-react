import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <body>
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contacts' element={<Contacts/>} />
      </Routes> 
    </div>
    </body>
  )
}

export default App
