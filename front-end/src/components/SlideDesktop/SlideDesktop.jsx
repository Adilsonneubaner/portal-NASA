import '../SlideDesktop/SlideDesktop.css'
import { useState, useRef } from 'react'
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
// Router 
import { Link} from 'react-router-dom'

const SlideDesktop = ({slides}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

  return (
    <>
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
    </>
  )
}

export default SlideDesktop