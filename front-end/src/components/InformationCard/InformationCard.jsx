import './InformationCard.css'

const InformationCard = ({title, photo, photoDate, photoCopyright, about}) => {
  return (
    <div className="container-information-card">
        <h2 className='information-card-title'>{title}</h2>

        <img src={photo} alt={title} className='information-card-photo'/>

        {photoDate && photoCopyright && (
            <div className="information-card-data">
                <p>Foto de {photoDate}</p>
                <p>{photoCopyright}</p>
            </div>
        )}
        
        <p className='information-card-about'>{about}</p>
    </div>
  )
}

export default InformationCard