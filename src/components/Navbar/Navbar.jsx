import './Navbar.css'

// Swiper
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'

// Router 
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const slides = [
    {id: 1, img: '', description: ''},
    {id: 2, img: '', description: ''},
    {id: 3, img: '', description: ''},
    {id: 4, img: '', description: ''},
    {id: 5, img: '', description: ''},
    {id: 6, img: '', description: ''},
    {id: 7, img: '', description: ''}
  ]

  return (
    <header>
      <div>
        <h1>Portal NASA</h1>
      </div>

      <div>
        <Swiper
          pagination={{
            el: '.pagination-links',
            clickable:true
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div>
                <img src={slide.img}/>
              </div>

              <div>
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <nav className='pagination-links'>
          <ul>
            <li>
              <NavLink to='/photo-of-the-day'>Foto do dia</NavLink>
            </li>
            
            <li>
              <NavLink to='/photos-of-mars'>Fotos de Marte</NavLink>
            </li>

            <li>
              <NavLink to='/asteroids'>Asteroides próximos da Terra</NavLink>
            </li>

            <li>
              <NavLink to='/technologies'>Tecnologias liberadas para o público</NavLink>
            </li>

            <li>
              <NavLink to='/exoplanets'>Exoplanetas</NavLink>
            </li>

            <li>
              <NavLink to='/image-bank'>Banco de imagens</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar