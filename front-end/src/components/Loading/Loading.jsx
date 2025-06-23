import './Loading.css'

import loading from '../../images/loading.gif'

const Loading = () => {
  return (
    <div className="container-gif">
        <img src={loading} alt="loading" />
    </div>
  )
}

export default Loading