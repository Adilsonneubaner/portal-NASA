import './Images.css'

import search_gif from '../../images/search.gif'

// Hooks
import { useContext, useEffect, useState, useRef } from 'react'
import { useGet } from '../../hooks/useGet'
import { useScrollLoad } from '../../hooks/useScrollLoad'

// Context
import { LoadingContext } from '../../context/LoadingContext'

// Components
import Loading from '../../components/Loading/Loading'
import InformationCard from '../../components/InformationCard/InformationCard'
import Pagination from '../../components/Pagination/Pagination'


const Images = () => {

  const {loading, setLoading} = useContext(LoadingContext)

  const [query, setQuery] = useState('')

  const [error, setError] = useState('')

  const [array, setArray] = useState('')

  // Pagination

  const limit = 10

  const [offset, setOffset] = useState(0)

  const [total, setTotal] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()

    if(!query){
      setError('Você tem que digitar algum termo para pesquisar')
      return
    }

    setLoading(true)

    // Traduzindo pesquisa do usuário para EN
    const res = await fetch(
    `https://api.mymemory.translated.net/get?q=${query}&langpair=pt|en`
    )

    const data = await res.json()
    
    const queryTranslate = data.responseData.translatedText

    console.log(queryTranslate)

    try {

      console.log(queryTranslate)
      const res = await fetch(`https://images-api.nasa.gov/search?q=${queryTranslate}`)

      const data = await res.json()

      const itens = await data.collection.items

      setArray(itens)
      
      setTotal(itens.length)
      
      setLoading(false)

    } catch (error) {
      console.log(error)

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
          <Loading/>
        </main>
      ) : (
        <main className='container-content' id='top-link' ref={load}>

          <h1>O que deseja ver?</h1>

          <form onSubmit={handleSearch} className='form-search'>

              <input type="text" placeholder='Pesquisar' onChange={(e) => setQuery(e.target.value)} className='input-search'/>

              <button type='submit' className='button-search'>
                <img src={search_gif}/>
              </button>

          </form>

          {array && total && (
            <>

              <div className="container-display-flex margin-top-to-images">
                {array.slice(offset).slice(0, limit).map((item) => (
                  <InformationCard key={item.href} photo={item.links[0].href}/>
                ))}
              </div>

              <Pagination limit={limit} total={total} offset={offset} setOffset={setOffset}/>

            </>
          )}

          {error && (
            <div className='container-error'>
              <p>{error}</p>
            </div>
          )}
        </main>
      )}
    </>
  )
}

export default Images