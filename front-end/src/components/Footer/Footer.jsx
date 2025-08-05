import './Footer.css'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div id='container-link-site-nasa'>
            <Link to='https://www.nasa.gov/' target='_blank' id='link-site-nasa' className='text-links'>Veja o site oficial da NASA e descubra muitas outras curiosidades</Link>
        </div>

        <div id="apis-information">
            <div>
                <Link to='https://api.nasa.gov/' target='_blank' className='text-links' id='documentation'>Documentação das APIs</Link>
            </div>
            <div>
                <p id='apis-list'>Lista das APIs usadas</p>
                <ul>
                    <li className='apis'>
                        APOD(Astronomy Picture of the Day)
                    </li>
                    <li className='apis'>
                        Mars Rover Photos
                    </li>
                    <li className='apis'>
                        Asteroids NeoWs(Near Earth Object Web Service)
                    </li>
                    <li className='apis'>
                        Techport
                    </li>
                    {/* <li className='apis'>
                        Exoplanet
                    </li> */}
            
                    <li className='apis'>
                        NASA Image and Video Library
                    </li>
                </ul>
            </div>
        </div>

        <div id="creator">
            <div id="copy">
                <p>&copy; Adilson Neubaner - 2025</p>
            </div>
            
            <ul id='contact-links'>
                <li>
                    <Link to="https://wa.me/553398214909" target='_blank'>
                        <i className="bi bi-whatsapp"></i>
                    </Link>
                </li>
                <li>
                    <Link to="mailto:juniorneubaner@gmail.com" target='_blank'>
                        <i className="bi bi-envelope-fill"></i>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/adilsonneubaner/" target='_blank'>
                        <i className="bi bi-linkedin"></i>
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/Adilsonneubaner" target='_blank'>
                        <i className="bi bi-github"></i>
                    </Link>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer