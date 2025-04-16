import './App.css'

// Router Dom
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'

// Components
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
