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
          <div className="container-rovers">
              <form>
                <div className="rovers-box">
                  Curiosity
                  <input type="radio" name="rovers" id="curiosity" />
                </div>

                <div className="rovers-box">
                  Opportunity
                  <input type="radio" name="rovers" id="opportunity" />
                </div>

                <div className="rovers-box">
                  Spirit
                  <input type="radio" name="rovers" id="spirit" />
                </div>
              </form>
          </div>

          <div className="rovers-data">
            <div id="curiosity-data">
              <p>Dados sobre</p>
              <p>Data de lançamento</p>
              <p>Data de pouso</p>
              <p>Status</p>
              <p>Data das últimas fotos</p>
              <p>Fotos já tiradas</p>

              <form onSubmit={handleCuriosity}>
                <label>
                  Busque fotos por uma data
                  <input type="date" id="" />
                </label>
                <button type='submit'>Veja fotos</button>
              </form>
            </div>

            <div id="opportunity-data">
              <p>Dados sobre</p>
              <p>Data de lançamento</p>
              <p>Data de pouso</p>
              <p>Status</p>
              <p>Data das últimas fotos</p>
              <p>Fotos já tiradas</p>

              <form onSubmit={handleOpportunity}>
                <label>
                  Busque fotos por uma data
                  <input type="date" id="" />
                </label>
                <button type='submit'>Veja fotos</button>
              </form>
            </div>
          
            <div id="spirit-data">
              <p>Dados sobre</p>
              <p>Data de lançamento</p>
              <p>Data de pouso</p>
              <p>Status</p>
              <p>Data das últimas fotos</p>
              <p>Fotos já tiradas</p>

              <form onSubmit={handleSpirit}>
                <label>
                  Busque fotos por uma data
                  <input type="date" id="" />
                </label>
                <button type='submit'>Veja fotos</button>
              </form>
            </div>
          </div>
      </div>
    </main>
  )
}

export default PhotoMars