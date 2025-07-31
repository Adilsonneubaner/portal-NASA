import './Navbar.css'

import {useRef, useState} from 'react'

// Images
import photoDay from '../../images/foto-do-dia.png'
import photoMars from '../../images/foto-de-marte.jpg'
import asteroids from '../../images/asteroides.jpg'
import techonologies from '../../images/tecnologias.jpg'
import exoplanets from '../../images/exoplanetas.jpg'
import imageBank from '../../images/banco-de-imagens.webp'

// Swiper
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Pagination} from 'swiper/modules'

// Router 
import { Link} from 'react-router-dom'

const Navbar = () => {

  const slides = [
    {id: 1, img: photoDay, description: 'Uma sessão onde você pode ver todo dia uma foto astronómica nova, capturada pela NASA', link: '/photo-of-the-day', name: 'Foto do dia', idCSS: 'photo-day'},

    {id: 2, img: photoMars, description: 'Veja as fotos tiradas pelos rovers Curiosity, Opportunity, e Spirit em Marte', link: '/photos-of-mars', name: 'Fotos de Marte', idCSS: 'photo-mars'},

    {id: 3, img: asteroids, description: 'Dados sobre asteroides próximos à Terra', link: '/asteroids', name: 'Asteroides próximos', idCSS: 'asteroids'},

    {id: 4, img: techonologies, description: 'Conheça as tecnologias criadas pela NASA e liberadas para uso público', link: '/technologies', name: 'Tecnologias liberadas', idCSS: 'techonologies'},

    {id: 5, img: exoplanets, description: 'Dados sobre planetas fora do sistema solar', link: '/exoplanets', name: 'Exoplanetas', idCSS: 'exoplanets'},

    {id: 6, img: imageBank, description: 'Busque e veja imagens do banco de dados da NASA', link: '/image-bank', name: 'Banco de imagens', idCSS: 'image-bank'}
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <header>
      <div id='container-title'>
        <Link id='title' to='/'>Portal <span id='nasa'>NASA</span></Link>
      </div>

      <div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={{
            el: '.pagination-links',
            clickable:true
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>

              <div className="background-slide" id={slide.idCSS} style={{
                backgroundImage: `url(${slide.img})`
              }}>

                <div className="slide">

                  <p>{slide.description}</p>
                  <Link to={`${slide.link}`} className='buttons'>Ver aqui</Link>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

          <div>
            <ul className='pagination-links'>
              {slides.map((slide, index) => (
                <li
                key={slide.id}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`pagination ${index === activeIndex? 'pagination-active' : ''}`}>
                  {slide.name}
                </li>
              ))}
            </ul>
          </div>
      </div>
    </header>
  )
}

export default Navbar