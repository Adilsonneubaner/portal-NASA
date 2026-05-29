import './PhotoMars.css'

// Hooks
import {useGet} from '../../hooks/useGet'
import { useContext, useState, useRef, useEffect } from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import { useTranscribedDate } from '../../hooks/useTranscribedDate'
import { useScrollLoad } from '../../hooks/useScrollLoad'

// Context
import { LoadingContext } from '../../context/LoadingContext'

// Component
import Loading from '../../components/Loading/Loading'

const PhotoMars = () => {
  const {loading, setLoading} = useContext(LoadingContext)

  const manifestCuriosity = {
    name: "Curiosity",
    launch_date: "26-11-2011",
    landing_date: "06-08-2012",
    status: "missão ativa",
    total_photos: "650.000+"
  }

  const manifestOpportunity = {
    name: "Opportunity",
    launch_date: "07-07-2003",
    landing_date: "26-01-2004",
    status: "missão completa",
    total_photos: "228.779"
  }

  const manifestSpirit = {
    name: "Spirit",
    launch_date: "10-06-2003",
    landing_date: "04-01-2004",
    status: "missão completa",
    total_photos: "124.838"
  }


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
            {selected === 'curiosity' && (
              <>
                <h2>{manifestCuriosity.name}</h2>
                <div className="data-form">

                  <div className="rovers-information-container">
                    <p className="color-text">Data de lançamento
                      <span className="color-data"> {manifestCuriosity.launch_date}</span>
                    </p>
                    <p className="color-text">Data de pouso
                      <span className="color-data"> {manifestCuriosity.landing_date}</span>
                    </p>
                    <p className="color-text">Status
                      <span className="color-data"> {manifestCuriosity.status}</span>
                    </p>
                    <p className="color-text">Fotos já tiradas
                      <span className="color-data"> {manifestCuriosity.total_photos}</span>
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

            {selected === 'opportunity' && (
              <>
                <h2>{manifestOpportunity.name}</h2>
                <div className="data-form">

                  <div className="rovers-information-container">
                    <p className="color-text">Data de lançamento
                      <span className="color-data"> {manifestOpportunity.launch_date}</span>
                    </p>
                    <p className="color-text">Data de pouso
                      <span className="color-data"> {manifestOpportunity.landing_date}</span>
                    </p>
                    <p className="color-text">Status
                      <span className="color-data"> {manifestOpportunity.status}</span>
                    </p>
                    <p className="color-text">Fotos já tiradas
                      <span className="color-data"> {manifestOpportunity.total_photos}</span>
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
          
            {selected === 'spirit' && (
              <>
              <h2>{manifestSpirit.name}</h2>
              <div className="data-form">

                  <div className="rovers-information-container">
                    <p className="color-text">Data de lançamento
                      <span className="color-data"> {manifestSpirit.launch_date}</span>
                    </p>
                    <p className="color-text">Data de pouso
                      <span className="color-data"> {manifestSpirit.launch_date}</span>
                    </p>
                    <p className="color-text">Status
                      <span className="color-data"> {manifestSpirit.status}</span>
                    </p>
                    <p className="color-text">Fotos já tiradas
                      <span className="color-data"> {manifestSpirit.total_photos}</span>
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