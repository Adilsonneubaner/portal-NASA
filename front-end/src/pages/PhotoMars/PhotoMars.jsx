import './PhotoMars.css'

// Hooks
import {useGet} from '../../hooks/useGet'
import { useContext, useState } from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import { useTranscribedDate } from '../../hooks/useTranscribedDate'

// Context
import { LoadingContext } from '../../context/LoadingContext'

// Component
import Loading from '../../components/Loading/Loading'

const PhotoMars = () => {
  const {loading, setLoading} = useContext(LoadingContext)
  
  const api_key_nasa = 'XdPKGfLWgyAVR6bvL6vDO6etSOec8xJknUoehHmK'

  const urlManifestCuriosity = `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=${api_key_nasa}`

  const urlManifestOpportunity = `https://api.nasa.gov/mars-photos/api/v1/manifests/Opportunity?api_key=${api_key_nasa}`

  const urlManifestSpirit = `https://api.nasa.gov/mars-photos/api/v1/manifests/Spirit?api_key=${api_key_nasa}`

  const {data: manifestCuriosity} = useGet(urlManifestCuriosity)
  const {data: manifestOpportunity} = useGet(urlManifestOpportunity)
  const {data: manifestSpirit} = useGet(urlManifestSpirit)


  // Curiosity date transcribed
  const {transcribedDate: curiosity_launch_date} = useTranscribedDate(manifestCuriosity ? manifestCuriosity.photo_manifest.launch_date : null)

  const {transcribedDate: curiosity_landing_date} = useTranscribedDate(manifestCuriosity ? manifestCuriosity.photo_manifest.landing_date : null)

  const {transcribedDate: curiosity_max_date} = useTranscribedDate(manifestCuriosity ? manifestCuriosity.photo_manifest.max_date : null)
  
  // Opportunity date transcribed
  const {transcribedDate: opportunity_launch_date} = useTranscribedDate(manifestOpportunity ? manifestOpportunity.photo_manifest.launch_date : null)

  const {transcribedDate: opportunity_landing_date} = useTranscribedDate(manifestOpportunity ? manifestOpportunity.photo_manifest.landing_date : null)

  const {transcribedDate: opportunity_max_date} = useTranscribedDate(manifestOpportunity ? manifestOpportunity.photo_manifest.max_date : null)

  // Spirit date transcribed
  const {transcribedDate: spirit_launch_date} = useTranscribedDate(manifestSpirit ? manifestSpirit.photo_manifest.launch_date : null)

  const {transcribedDate: spirit_landing_date} = useTranscribedDate(manifestSpirit ? manifestSpirit.photo_manifest.landing_date : null)

  const {transcribedDate: spirit_max_date} = useTranscribedDate(manifestSpirit ? manifestSpirit.photo_manifest.max_date : null)


  // Translations
  const {translation: translationCuriosity} = useTranslate(manifestCuriosity? [manifestCuriosity.photo_manifest.status] : null)

  const {translation: translationOpportunity} = useTranslate(manifestOpportunity? [manifestOpportunity.photo_manifest.status] : null)

  const {translation: translationSpirit} = useTranslate(manifestSpirit? [manifestSpirit.photo_manifest.status] : null)


  const [selected, setSelected] = useState('')
  const [date, setDate] = useState('')
  const [photos, setPhotos] = useState('')
  const [error, setError] = useState('')


  const handleSelected = (e) => {
    setSelected(e.target.value)
  }


  const handlePhotos = async (e, rover) => {
    e.preventDefault()

    setLoading(true)

    setError('')

    if(!date){
      setLoading(false)

      setError('Você tem que escolher uma data')
      return
    }
    
    if(rover === "opportunity" || rover === "spirit"){
      setLoading(false)

      setError('Infelizmente as fotos desse rover não estão disponíveis no momento!')
      return
    }

    const urlPhotosMars = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${api_key_nasa}`

    const res = await fetch(urlPhotosMars)

    const data = await (res).json()

    if(data.photos.length === 0){
      setLoading(false)

      setError('Infelizmente não existem fotos desse rover para essa data, tente outra')
    
    } else{
      const limitedPhotos = data.photos.slice(0, 10)
      setPhotos(limitedPhotos)

      setLoading(false)
    }

  }

  return (
    <>
      {loading ? (
        <main className='main-loading'>
          <Loading></Loading>
        </main>
      ): (
        
      <main>
        <div className="container-content">
          <form className="container-rovers">
            <div className="rovers-box" id="curiosity">
              Curiosity
              <input type="radio" name="rovers" value="curiosity" checked={selected === "curiosity"} onChange={handleSelected}/>
            </div>

            <div className="rovers-box" id="opportunity" >
              Opportunity
              <input type="radio" name="rovers" value="opportunity" checked={selected === "opportunity"} onChange={handleSelected}/>
            </div>

            <div className="rovers-box" id="spirit" >
              Spirit
              <input type="radio" name="rovers" value="spirit" checked={selected === "spirit"} onChange={handleSelected}/>
            </div>
          </form>

          <div className="rovers-data">
            {manifestCuriosity && translationCuriosity && (
              <>
                {selected === 'curiosity' && (
                  <>
                    <h2>{manifestCuriosity.photo_manifest.name}</h2>
                    <div className="data-form">

                      <div className="rovers-information-container">
                        <p className="rovers-information color-text">Data de lançamento
                          <span className="color-data"> {curiosity_launch_date}</span>
                        </p>
                        <p className="rovers-information color-text">Data de pouso
                          <span className="color-data"> {curiosity_landing_date}</span>
                        </p>
                        <p className="rovers-information color-text">Status
                          <span className="color-data"> {translationCuriosity.translations[0].text}</span>
                        </p>
                        <p className="rovers-information color-text">Data das últimas fotos
                          <span className="color-data"> {curiosity_max_date}</span>
                        </p>
                        <p className="rovers-information color-text">Fotos já tiradas
                          <span className="color-data"> {manifestCuriosity.photo_manifest.total_photos}</span>
                        </p>
                      </div>

                      <form onSubmit={(e) => handlePhotos(e, 'curiosity')} className='form-calendar'>
                        <p className="search-date">Busque fotos por uma data</p>
                        <div className="calendar">
                          <input type="date" id="" onChange={(e) => setDate(e.target.value)}/>
                          <i className="bi bi-calendar"></i>
                        </div>
                        <button type='submit' className="button-submit">Veja fotos</button>
                      </form>
                    </div>
                  </>
                )}
              </>
            )}

            {manifestOpportunity && translationOpportunity && (
              <>
                {selected === 'opportunity' && (
                  <>
                    <h2>{manifestOpportunity.photo_manifest.name}</h2>
                    <div className="data-form">

                      <div className="rovers-information-container">
                        <p className="rovers-information color-text">Data de lançamento
                          <span className="color-data"> {opportunity_launch_date}</span>
                        </p>
                        <p className="rovers-information color-text">Data de pouso
                          <span className="color-data"> {opportunity_landing_date}</span>
                        </p>
                        <p className="rovers-information color-text">Status
                          <span className="color-data"> {translationOpportunity.translations[0].text}</span>
                        </p>
                        <p className="rovers-information color-text">Data das últimas fotos
                          <span className="color-data"> {opportunity_max_date}</span>
                        </p>
                        <p className="rovers-information color-text">Fotos já tiradas
                          <span className="color-data"> {manifestOpportunity.photo_manifest.total_photos}</span>
                        </p>
                      </div>

                      <form onSubmit={(e) => handlePhotos(e, 'opportunity')} className='form-calendar'>
                        <p className="search-date">Busque fotos por uma data</p>
                        <div className="calendar">
                          <input type="date" id="" onChange={(e) => setDate(e.target.value)}/>
                          <i className="bi bi-calendar"></i>
                        </div>
                        <button type='submit' className="button-submit">Veja fotos</button>
                      </form>
                    </div>
                  </>
                )}
              </>
            )}
          
            {manifestSpirit && translationSpirit && (
              <>
                {selected === 'spirit' && (
                  <>
                  <h2>{manifestSpirit.photo_manifest.name}</h2>
                  <div className="data-form">

                      <div className="rovers-information-container">
                        <p className="rovers-information color-text">Data de lançamento
                          <span className="color-data"> {spirit_launch_date}</span>
                        </p>
                        <p className="rovers-information color-text">Data de pouso
                          <span className="color-data"> {spirit_landing_date}</span>
                        </p>
                        <p className="rovers-information color-text">Status
                          <span className="color-data"> {translationSpirit.translations[0].text}</span>
                        </p>
                        <p className="rovers-information color-text">Data das últimas fotos
                          <span className="color-data"> {spirit_max_date}</span>
                        </p>
                        <p className="rovers-information color-text">Fotos já tiradas
                          <span className="color-data"> {manifestSpirit.photo_manifest.total_photos}</span>
                        </p>
                      </div>

                      <form onSubmit={(e) => handlePhotos(e, 'spirit')} className='form-calendar'>
                        <p className="search-date">Busque fotos por uma data</p>
                        <div className="calendar">
                          <input type="date" id="" onChange={(e) => setDate(e.target.value)}/>
                          <i className="bi bi-calendar"></i>
                        </div>
                        <button type='submit' className="button-submit">Veja fotos</button>
                      </form>
                    </div>
                  </>
                )}
              </>
            )}

            {error && 
              <div className="container-img-mars">
                <p className='no-photo'>{error}</p>
              </div>
            }
            
            {!error && !loading && photos && photos.map((photo) => (
              <div className="container-img-mars" key={photo.id}>
                <img src={photo.img_src}  className='img-mars'/>
              </div>
            ))}
          </div>
        </div>
      </main>
      )}
    </>
  )
}

export default PhotoMars