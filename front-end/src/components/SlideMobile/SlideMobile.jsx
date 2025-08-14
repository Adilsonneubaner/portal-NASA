import '../SlideMobile/SlideMobile.css'
// Swiper

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Router 
import { Link} from 'react-router-dom'

import { useEffect, useState } from 'react'

const SlideMobile = ({slides}) => {

    // Importação dinâmico do Swiper

    const [SwiperComponents, setSwiperComponents] = useState(null)

    useEffect(() => {
        import('swiper/react').then(({Swiper, SwiperSlide}) => {
            import('swiper/modules').then(({Navigation, Pagination}) => {
                setSwiperComponents({Swiper, SwiperSlide, Navigation, Pagination})
            })
        })
    },[])

    if(!SwiperComponents) return null

    const {Swiper, SwiperSlide, Navigation, Pagination} = SwiperComponents

  return (
    <>
        <Swiper
            modules={[Navigation, Pagination]}
            pagination={{clickable: true}}
            navigation
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
    </>
  )
}

export default SlideMobile