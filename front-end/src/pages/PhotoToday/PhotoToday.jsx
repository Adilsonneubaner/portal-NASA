import './PhotoToday.css'

// Hooks
import { useGet } from '../../hooks/useGet'
import { useTranslate } from '../../hooks/useTranslate'
import { useContext } from 'react'
import { useTranscribedDate } from '../../hooks/useTranscribedDate'

// Context
import {LoadingContext} from '../../context/LoadingContext'

// Components
import Loading from '../../components/Loading/Loading'

const PhotoToday = () => {
  const {loading} = useContext(LoadingContext)

  const api_key_nasa = 'XdPKGfLWgyAVR6bvL6vDO6etSOec8xJknUoehHmK'

  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  const current_date = `${year}-${month}-${day}`

  const urlAPOD = `https://api.nasa.gov/planetary/apod?api_key=${api_key_nasa}&date=${current_date}`

  const {data: photo_data} = useGet(urlAPOD)

  const {transcribedDate: photo_date} = useTranscribedDate(photo_data? photo_data.date : null)

  const {translation} = useTranslate(photo_data?
    [photo_data.title, photo_data.explanation] : 
    null
  )


  return (
    <>
      {loading ? (
        <main>
          <Loading></Loading>
        </main>
      ): (
        <main>
          <div className="container-content margin-containers">

            <div className="container-photo">
              <h2 className='photo-title'>{translation && translation.translations[0].text}</h2>

              <img src={photo_data.url} alt={photo_data.title} className='photo-of-the-day'/>

              <div className="photo-data">
                <p>Foto de {photo_date}</p>
                <p>{photo_data.copyright}</p>
              </div>

              <p className='about-photo'>{translation && translation.translations[1].text}</p>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default PhotoToday