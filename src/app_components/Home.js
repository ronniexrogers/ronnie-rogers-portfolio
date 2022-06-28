import { useState } from 'react'
import Resume from './Resume'
import Portfolio from './Portfolio'
import 'animate.css'

const Home = ({ titleAnimation }) => {

    const profilePicture = require('./Resources/selfie.jpg')
    const linkedIn = require('./Resources/LinkedIn-Logo.png')
    const github = require('./Resources/github-logo.png')

    const [modalState, setModalState] = useState('mobile-modal')

    return ( 
        <div className="home">
            <div className={ titleAnimation }>
                <h3>Ronnie R. Rogers</h3>
                <h3>Full Stack Software Engineer</h3>
                <h6>Javascript / React / Node / Express / Python</h6>
            </div>
            <img alt='selfie' className='animate__animated animate__rollIn profile-picture' src={ profilePicture } />  
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ronniexrogers">
                <img alt='linkedin logo' className='socials' src={ linkedIn } /> 
            </a> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/ronniexrogers">
            <img alt='github logo' className='socials' src={ github } />  
            </a>
            <div className={ modalState }>
                Hey there! 
                <br></br>
                I see you're visiting from a mobile browser.  This site isn't quite yet optimized for mobile browsing.  I recommend viewing from a desktop browser for the best experience in the meantime!
                <br></br>
                <button onClick={() => setModalState('modalClosed')}>Close</button>
            </div>
            <div className="resume">
                <Resume />
            </div>
            <div className="portfolio">
                <Portfolio />
            </div>
        </div>
     )
}
 
export default Home