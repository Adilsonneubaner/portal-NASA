import './Asteroids.css'

// Hooks
import { useContext, useState } from 'react'
import { useTranscribedDate } from '../../hooks/useTranscribedDate'
import {useGet} from '../../hooks/useGet'

// Context
import {LoadingContext} from '../../context/LoadingContext'

// Components
import Loading from '../../components/Loading/Loading'

const Asteroids = () => {

  const {loading} = useContext(LoadingContext)

  const api_key_nasa = 'XdPKGfLWgyAVR6bvL6vDO6etSOec8xJknUoehHmK'

  const [selected, setSelected] = useState('')

  const {data: Eros433} = useGet(`https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=${api_key_nasa}`)// id 2000433
  
  const {data: Apophis99942} = useGet(`https://api.nasa.gov/neo/rest/v1/neo/2099942?api_key=${api_key_nasa}`)// id 2099942
  
  const {data: Bennu101955} = useGet(`https://api.nasa.gov/neo/rest/v1/neo/2101955?api_key=${api_key_nasa}`)// id 2101955
  
  const {data: Florence3122} = useGet(`https://api.nasa.gov/neo/rest/v1/neo/2003122?api_key=${api_key_nasa}`)// id 2003122
  
  const {data: Phaethon3200} = useGet(`https://api.nasa.gov/neo/rest/v1/neo/2003200?api_key=${api_key_nasa}`)// id 2003200
  

  // Transcription of dates

  // Eros
  const {transcribedDate: Eros433_first_observation_date} = useTranscribedDate(Eros433? Eros433.orbital_data.first_observation_date : null)
  
  const {transcribedDate: Eros433_last_observation_date} = useTranscribedDate(Eros433? Eros433.orbital_data.last_observation_date : null)

  // Apophis
  const {transcribedDate: Apophis99942_first_observation_date} = useTranscribedDate(Apophis99942? Apophis99942.orbital_data.first_observation_date : null)
    
  const {transcribedDate: Apophis99942_last_observation_date} = useTranscribedDate(Apophis99942? Apophis99942.orbital_data.last_observation_date : null)

  // Bennu
  const {transcribedDate: Bennu101955_first_observation_date} = useTranscribedDate(Bennu101955? Bennu101955.orbital_data.first_observation_date : null)
    
  const {transcribedDate: Bennu101955_last_observation_date} = useTranscribedDate(Bennu101955? Bennu101955.orbital_data.last_observation_date : null)

  // Florence
  const {transcribedDate: Florence3122_first_observation_date} = useTranscribedDate(Florence3122? Florence3122.orbital_data.first_observation_date : null)
  
 const {transcribedDate: Florence3122_last_observation_date} = useTranscribedDate(Florence3122? Florence3122.orbital_data.last_observation_date : null)

 //Phaethon
 const {transcribedDate: Phaethon3200_first_observation_date} = useTranscribedDate(Phaethon3200? Phaethon3200.orbital_data.first_observation_date : null)
  
 const {transcribedDate: Phaethon3200_last_observation_date} = useTranscribedDate(Phaethon3200? Phaethon3200.orbital_data.last_observation_date : null)


 // Asteroid object array

 const asteroids = [
  {
    name: Eros433.name,
    first_observation_date: Eros433_first_observation_date,
    last_observation_date: Eros433_last_observation_date,
    curiosity: '433 Eros foi o primeiro asteroide a ser orbitado por uma sonda espacial. A missão NEAR Shoemaker da NASA entrou em órbita ao redor de Eros em 2000 e, em 2001, fez algo ainda mais surpreendente: pousou suavemente na sua superfície, mesmo sem ter sido projetada para pouso! Esse feito histórico tornou a NEAR Shoemaker a primeira missão a pousar em um asteroide, revelando dados preciosos sobre sua composição, densidade e estrutura interna. Entre as descobertas, viu-se que Eros é feito principalmente de rochas ricas em silicato e níquel-ferro, indicando uma origem comum com os materiais que formaram os planetas terrestres.',
    id: Eros433.id
  },
  {
    name: Apophis99942.name,
    first_observation_date: Apophis99942_first_observation_date,
    last_observation_date: Apophis99942_last_observation_date,
    curiosity: 'Quando foi descoberto em 2004, ele causou um verdadeiro alarme global: as primeiras análises apontaram uma chance significativa de colisão com a Terra em 2029, o que gerou muita atenção da mídia e da comunidade científica. Felizmente, observações posteriores descartaram essa possibilidade. Porém, o que torna Apophis especial até hoje é que, em 13 de abril de 2029, ele vai passar extremamente perto da Terra, a uma distância de cerca de 31 mil quilômetros — mais próximo do que muitos satélites de comunicação em órbita! Essa será uma das passagens mais próximas já registradas para um asteroide desse tamanho (cerca de 340 metros de diâmetro).',
    id: Apophis99942.id
  },
  {
    name: Bennu101955.name,
    first_observation_date: Bennu101955_first_observation_date,
    last_observation_date: Bennu101955_last_observation_date,
    curiosity: 'O que chama a atenção em Bennu é seu potencial risco futuro: ele é um dos asteroides com maior chance conhecida de colidir com a Terra, embora essa chance ainda seja muito pequena. A data mais crítica considerada é o ano de 2182, com uma chance de impacto estimada em cerca de 1 em 2.700 (ou 0,037%).',
    id: Bennu101955.id
  },
  {
    name: Florence3122.name,
    first_observation_date: Florence3122_first_observation_date,
    last_observation_date: Florence3122_last_observation_date,
    curiosity: 'Uma curiosidade impressionante sobre o asteroide 3122 Florence é que ele é um dos maiores asteroides que já passaram muito perto da Terra (com cerca de 4,5 quilômetros de diâmetro, ele é grande o suficiente para causar danos globais se colidisse com o nosso planeta). Felizmente, Florence não representa risco de impacto conhecido, mas ele teve um sobrevoo muito próximo em 1º de setembro de 2017, quando passou a cerca de 7 milhões de quilômetros da Terra, relativamente perto em termos astronômicos. Esse encontro foi o mais próximo que um asteroide desse tamanho chegou da Terra desde o início das observações modernas. Durante essa passagem, os astrônomos usaram radar para estudar Florence com detalhes, e fizeram uma descoberta surpreendente: ele tem dois pequenos satélites naturais (luas) orbitando ao seu redor! Isso o torna um dos poucos asteroides triplos conhecidos.',
    id: Florence3122.id
  },
  {
    name: Phaethon3200.name,
    first_observation_date: Phaethon3200_first_observation_date,
    last_observation_date: Phaethon3200_last_observation_date,
    curiosity: 'Apesar de ser classificado como um asteroide, ele se comporta como um cometa, a ponto de ser chamado por alguns cientistas de “cometa rochoso”. Phaethon é o corpo responsável pela chuva de meteoros Gemínidas, uma das mais intensas do ano, que ocorre todo mês de dezembro. Isso é curioso porque, normalmente, chuvas de meteoros são causadas por cometas, que liberam poeira e detritos ao se aproximar do Sol. No caso de Phaethon, ele parece gerar esse material sem ter gelo como um cometa tradicional, uma verdadeira exceção entre os objetos do sistema solar. Outro fato notável: Phaethon tem uma órbita extremamente elíptica, chegando muito perto do Sol, mais até do que Mercúrio! Acredita-se que o calor extremo (acima de 700 °C) cause rachaduras e desprendimentos em sua superfície, criando os detritos que formam a chuva de meteoros.',
    id: Phaethon3200.id
  }
 ]

 const handleSelected = (e) => {
  if(e.target.value === selected){
    setSelected('')
    return
  }
  setSelected(e.target.value)
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
              <div className="data-asteroids">
                {asteroids && asteroids.map((asteroid) => (
                  <div className="asteroid" key={asteroid.id}>

                    <div className="drop-drown-asteroid">
                      <input type='checkbox' 
                      value={asteroid.id} 
                      checked={selected === asteroid.id} 
                      onChange={handleSelected}/>

                      <p className='asteroid-name color-text'>{asteroid.name}</p>

                      {selected === asteroid.id ? 
                      <i className="bi bi-caret-up color-text"></i> : 
                      <i className="bi bi-caret-down color-text"></i>
                      }
                    </div>

                    <div className="content-asteroid">
                      <p className='first-observation color-text'>Primeira observação: 
                        <span className="color-data"> {asteroid.first_observation_date}</span>
                      </p>

                      <p className='last-observation color-text'>Observação mais recente: 
                        <span className="color-data"> {asteroid.last_observation_date}</span>
                      </p>

                      <p className='asteroid-curiosity color-text'>{asteroid.curiosity}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </main>
      )}
    </>
  )
}

export default Asteroids