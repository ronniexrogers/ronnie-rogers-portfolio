const Portfolio = () => {
    return ( 
        <div className="portfolio">
            <h3>Portfolio</h3>
            <div className="project-div">
                <h5>Denisse On Fire</h5>
                "Denisse On Fire" is a full stack web application I developed for a local cosmetologist.  Users are able to sign in and create appointments with image upload.  The salon owner is able to sign in, view/edit appointments, and add/edit photos to the gallery.
                <br></br>
                <b>Technologies used:</b>
                <br></br>
                React / Node / Express / MongoDB / AWS S3
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.Denisseonfire.com">Check it out!</a>| 
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ronniexrogers/salon-app">Github Repo</a>
            </div>
            <div className="project-div">
                <h5>Vegan Recipe Finder</h5>
                "Vegan Recipe Finder" is a React web application I developed for myself.  Users are able to search for recipes based on ingredients they input.  The site then uses the search criteria to filter through recipes in an external API and return a list of corresponding recipes.
                <br></br>
                <b>Technologies used:</b>
                <br></br>
                React / CSS / HTML / ReactStrap / BootStrap
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://veganrecipefinder.netlify.app/">Check it out!</a>| 
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ronniexrogers/vegan-recipe-maker">Github Repo</a>
            </div>
            <div className="project-div">
                <h5>21 (Blackjack)</h5>
                My very first project is the classic casino game of Blackjack.  It is player vs an A.I. dealer.  The objective is to score as close to 21 as you can without going over.
                <br></br>
                <b>Technologies used:</b>
                <br></br>
                Javascript / CSS / HTML
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://ronnie-rogers-blackjack.netlify.app/">Check it out!</a>| 
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ronniexrogers/blackjack-game">Github Repo</a>
            </div>
        </div>
     )
}
 
export default Portfolio