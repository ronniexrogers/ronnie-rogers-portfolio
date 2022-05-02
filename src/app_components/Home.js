const Home = () => {

    const profilePicture = require('./Resources/selfie.jpg')

    return ( 
        <div className="home">
            <h1>Ronnie R. Rogers</h1>
            <h3>Full Stack Software Engineer</h3>
            <h6>Javascript / React / Node / Express</h6>
            <img alt='selfie' className='profile-picture' src={ profilePicture } />            
        </div>
     )
}
 
export default Home