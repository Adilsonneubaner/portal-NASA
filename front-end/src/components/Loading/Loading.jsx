import './Loading.css'

import loading from '../../images/loading.gif'

const Loading = () => {
  return (
    <main>
        <div className="container-gif">
            <img src={loading} alt="loading" />
        </div>
    </main>
  )
}

export default Loading