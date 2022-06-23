const Home = () => {

    const profilePicture = require('./Resources/selfie.jpg')
    const linkedIn = require('./Resources/LinkedIn-Logo.png')
    const github = require('./Resources/github-logo.png')

    return ( 
        <div className="home">
            <h3>Ronnie R. Rogers</h3>
            <h3>Full Stack Software Engineer</h3>
            <h6>Javascript / React / Node / Express / Python</h6>
            <img alt='selfie' className='profile-picture' src={ profilePicture } />  
            <br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ronniexrogers">
                <img alt='linkedin logo' className='socials' src={ linkedIn } /> 
            </a> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/ronniexrogers">
            <img alt='github logo' className='socials' src={ github } />  
            </a>

            

        </div>
     )
}
 
export default Home