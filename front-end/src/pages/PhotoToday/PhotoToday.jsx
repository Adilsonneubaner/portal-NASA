// Hooks
import { useGet } from '../../hooks/useGet'
import { useTranslate } from '../../hooks/useTranslate'
import { useContext, useEffect, useRef } from 'react'
import { useTranscribedDate } from '../../hooks/useTranscribedDate'
import { useScrollLoad } from '../../hooks/useScrollLoad'

// Context
import {LoadingContext} from '../../context/LoadingContext'

// Components
import Loading from '../../components/Loading/Loading'
import InformationCard from '../../components/InformationCard/InformationCard'

const PhotoToday = () => {
  const {loading, setLoading} = useContext(LoadingContext)

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
  
  useEffect(() => {
    if (photo_date && translation) {
      setLoading(false)
    }
  }, [photo_date, translation])

  // Scroll com load
  const load = useRef()

  useScrollLoad(load)

  return (
    <>
      {loading ? (
        <main className='main-loading'>
          <Loading></Loading>
        </main>
      ): (
        <main>
          <div className="container-content" ref={load}>
            <InformationCard
             title={translation ? translation.translations[0].text : null}
             photo={photo_data.url}
             photoDate={photo_date}
             photoCopyright={photo_data.copyright}
             about={translation ? translation.translations[1].text : null}
            />
          </div>
        </main>
      )}
    </>
  )
}

export default PhotoToday