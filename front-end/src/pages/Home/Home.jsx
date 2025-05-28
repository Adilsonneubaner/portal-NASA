import './Home.css'

import nasa from '../../images/logo-nasa.jpg'

const Home = () => {
  return (
    <main>
      <div className="container-content">
        <h1>DESLUMBRE O UNIVERSO E SUAS MARAVILHAS</h1>
        <div className="content-home">
          <div className="paragraph-home">
            <p>A agência do governo dos Estados Unidos responsável pela pesquisa e desenvolvimento de tecnologias e programas de exoploração espacial, a NASA(National Aeronautics and Space Administration), fornece para uso público algumas de suas informações adquiridas a partir de seus estudos e explorações. Informações essas que para você amante de astronomia, são um prato cheio.</p>
            <p>Então não perca tempo, venha matar sua sede de curiosidade, e se encantar com algumas images impressionantes.</p>
          </div>
          <img src={nasa} alt={nasa} className='image-home'/>
        </div>
      </div>
    </main>
  )
}

export default Home