import './Technologies.css'

// Hooks
import { useContext } from 'react'
import { useGet } from '../../hooks/useGet'
import { useTranslate } from '../../hooks/useTranslate'

// Context
import { LoadingContext } from '../../context/LoadingContext'

// Components
import Loading from '../../components/Loading/Loading'

const Technologies = () => {

  const api_key_nasa = 'XdPKGfLWgyAVR6bvL6vDO6etSOec8xJknUoehHmK'

  const{loading} = useContext(LoadingContext)

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <main>
          <div className="container-content">
            <h1>Conheça algumas tecnologias criadas pela NASA</h1>
          </div>
        </main>
      )}
    </>
  )
}

export default Technologies