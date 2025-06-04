import './PhotoMars.css'

const PhotoMars = () => {

  const handleCuriosity = (e) => {
    e.preventDefault()
  }

  const handleOpportunity = (e) => {
    e.preventDefault()
  }

  const handleSpirit = (e) => {
    e.preventDefault()
  }

  return (
    <main>
      <div className="container-content margin-containers">
        <form className="container-rovers">
          <div className="rovers-box" id="curiosity">
            Curiosity
            <input type="radio" name="rovers" />
          </div>

          <div className="rovers-box" id="opportunity" >
            Opportunity
            <input type="radio" name="rovers"/>
          </div>

          <div className="rovers-box" id="spirit" >
            Spirit
            <input type="radio" name="rovers"/>
          </div>
        </form>

        <div className="rovers-data">
          <div id="curiosity-data">
            <h2>Dados sobre</h2>

            <p className="rovers-information">Data de lançamento 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Data de pouso
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Status 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Data das últimas fotos 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Fotos já tiradas 
              <span className="rover-information-span"> xxx</span>
            </p>

            <form onSubmit={handleCuriosity} className='form-calendar'>
              <p className="search-date">Busque fotos por uma data</p>
              <div className="calendar">
                <input type="date" id="" />
                <i className="bi bi-calendar"></i>
              </div>
              <button type='submit' className="button-submit">Veja fotos</button>
            </form>
          </div>

          <div id="opportunity-data">
            <h2>Dados sobre</h2>

            <p className="rovers-information">Data de lançamento 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Data de pouso
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Status 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Data das últimas fotos 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Fotos já tiradas 
              <span className="rover-information-span"> xxx</span>
            </p>

            <form onSubmit={handleOpportunity} className='form-calendar'>
              <p className="search-date">Busque fotos por uma data</p>
              <div className="calendar">
                <input type="date" id="" />
                <i className="bi bi-calendar"></i>
              </div>
              <button type='submit' className="button-submit">Veja fotos</button>
            </form>
          </div>
        
          <div id="spirit-data">
            <h2>Dados sobre</h2>

            <p className="rovers-information">Data de lançamento 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Data de pouso
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Status 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Data das últimas fotos 
              <span className="rover-information-span"> xxx</span>
            </p>

            <p className="rovers-information">Fotos já tiradas 
              <span className="rover-information-span"> xxx</span>
            </p>

            <form onSubmit={handleSpirit} className='form-calendar'>
              <p className="search-date">Busque fotos por uma data</p>
              <div className="calendar">
                <input type="date" id="" />
                <i className="bi bi-calendar"></i>
              </div>
              <button type='submit' className="button-submit">Veja fotos</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PhotoMars