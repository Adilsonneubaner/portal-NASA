import './Technologies.css'

// Hooks
import { useContext } from 'react'
import { useGet } from '../../hooks/useGet'
import { useTranslate } from '../../hooks/useTranslate'

// Context
import { LoadingContext } from '../../context/LoadingContext'

// Components
import Loading from '../../components/Loading/Loading'
import InformationCard from '../../components/InformationCard/InformationCard'

const Technologies = () => {

  const api_key_nasa = 'XdPKGfLWgyAVR6bvL6vDO6etSOec8xJknUoehHmK'
  
  const{loading} = useContext(LoadingContext)

  const {data: LEW_TOPS_118} = useGet(`https://api.nasa.gov/techtransfer/patent/?LEW-TOPS-118&api_key=${api_key_nasa}`)
  const {data: LAR_TOPS_351} = useGet(`https://api.nasa.gov/techtransfer/patent/?LAR-TOPS-351&api_key=${api_key_nasa}`)
  const {data: TOP2_295} = useGet(`https://api.nasa.gov/techtransfer/patent/?TOP2-295&api_key=${api_key_nasa}`)
  const {data: MSC_TOPS_96} = useGet(`https://api.nasa.gov/techtransfer/patent/?MSC-TOPS-96&api_key=${api_key_nasa}`)
  const {data: KSC_TOPS_1} = useGet(`https://api.nasa.gov/techtransfer/patent/?KSC-TOPS-1&api_key=${api_key_nasa}`)

  // Translations
  const {translation: translationLEW_TOPS_118} = useTranslate(LEW_TOPS_118 ?
    [LEW_TOPS_118.results[0][2], LEW_TOPS_118.results[0][3]] : 
    null
  )

  const {translation: translationLAR_TOPS_351} = useTranslate(LAR_TOPS_351 ?
    [LAR_TOPS_351.results[0][2], LAR_TOPS_351.results[0][3]] : 
    null
  )

  const {translation: translationTOP2_295} = useTranslate(TOP2_295 ?
    [TOP2_295.results[0][2], TOP2_295.results[0][3]] : 
    null
  )

  const {translation: translationMSC_TOPS_96} = useTranslate(MSC_TOPS_96 ?
    [MSC_TOPS_96.results[0][2], MSC_TOPS_96.results[0][3]] : 
    null
  )

  const {translation: translationKSC_TOPS_1} = useTranslate(KSC_TOPS_1 ?
    [KSC_TOPS_1.results[0][2], KSC_TOPS_1.results[0][3]] : 
    null
  )


  const technologies =
   translationLEW_TOPS_118 && 
   translationLAR_TOPS_351 && 
   translationTOP2_295 && 
   translationMSC_TOPS_96 && 
   translationKSC_TOPS_1 ? 
  [
    {
      id: LEW_TOPS_118.results[0][0],
      name: translationLEW_TOPS_118.translations[0].text,
      about: translationLEW_TOPS_118.translations[1].text,
      photo: LEW_TOPS_118.results[0][10] 
    },
    {
      id: LAR_TOPS_351.results[0][0],
      name: translationLAR_TOPS_351.translations[0].text,
      about: translationLAR_TOPS_351.translations[1].text,
      photo: LAR_TOPS_351.results[0][10]  
    },
    {
      id: TOP2_295.results[0][0],
      name: translationTOP2_295.translations[0].text,
      about: translationTOP2_295.translations[1].text,
      photo: TOP2_295.results[0][10]  
    },
    {
      id: MSC_TOPS_96.results[0][0],
      name: translationMSC_TOPS_96.translations[0].text,
      about: translationMSC_TOPS_96.translations[1].text,
      photo: MSC_TOPS_96.results[0][10]  
    },
    {
      id: KSC_TOPS_1.results[0][0],
      name: translationKSC_TOPS_1.translations[0].text,
      about: translationKSC_TOPS_1.translations[1].text,
      photo: KSC_TOPS_1.results[0][10]  
    }
  ] : 
  null


  return (
    <>
      {loading ? (
        <main className='main-loading'>
          <Loading/>
        </main>
      ) : (
        <main>
          <div className="container-content">
            <h1>Conheça algumas tecnologias criadas pela NASA</h1>

            <div className="container-display-flex">
              {technologies && technologies.map((technologie) => (
                <InformationCard key={technologie.id} title={technologie.name} photo={technologie.photo} about={technologie.about}/>
              ))}
            </div>

          </div>
        </main>
      )}
    </>
  )
}

export default Technologies