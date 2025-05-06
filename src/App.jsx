import './App.css'

// Router Dom
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import PhotoToday from './pages/PhotoToday/PhotoToday'
import PhotoMars from './pages/PhotoMars/PhotoMars'
import Asteroids from './pages/Asteroids/Asteroids'
import Tecnologies from './pages/Technologies/Technologies'
import Exoplanets from './pages/Exoplanets/Exoplanets'
import Images from './pages/Images/Images'

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
          <Route path='/photo-of-the-day' element={<PhotoToday/>}/>
          <Route path='/photos-of-mars' element={<PhotoMars/>}/>
          <Route path='/asteroids' element={<Asteroids/>}/>
          <Route path='/technologies' element={<Tecnologies/>}/>
          <Route path='/exoplanets' element={<Exoplanets/>}/>
          <Route path='/image-bank' element={<Images/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
