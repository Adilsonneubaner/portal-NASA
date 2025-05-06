import './App.css'

// Router Dom
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'

// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
