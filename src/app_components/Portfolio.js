import { Card, CardBody, CardLink, CardSubtitle, CardTitle, CardText } from "reactstrap"

const Portfolio = () => {

    const denisseScreenShot = require('./Resources/denisse-on-fire-SS.png')
    const veganScreenShot = require('./Resources/vegan-recipe-SS.png')
    const blackjackScreenShot = require('./Resources/blackjack-SS.png')

    return ( 
        <div className="portfolio">
            <h3>Portfolio</h3>
            <div className="project-div">
            <Card>
                <CardBody>
                <CardTitle tag="h5">
                    Denisse On Fire
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    React / Node / Express / MongoDB / AWS S3
                </CardSubtitle>
                </CardBody>
                <img
                alt="Denisse on Fire screen shot"
                src={denisseScreenShot}
                width="100%"
                />
                <CardBody>
                <CardText>
                "Denisse On Fire" is a full stack web application I developed for a local cosmetologist.  Users are able to sign in and create appointments with image upload.  The salon owner is able to sign in, view/edit appointments, and add/edit photos to the gallery.
                </CardText>
                <CardLink href="https://www.Denisseonfire.com" target="_blank" rel="noopener noreferrer">
                    Check it out!
                </CardLink>
                <CardLink href="https://github.com/ronniexrogers/salon-app" target="_blank" rel="noopener noreferrer">
                    Github Repo
                </CardLink>
                </CardBody>
            </Card>
            </div>

            <div className="project-div">
            <Card>
                <CardBody>
                <CardTitle tag="h5">
                    Vegan Recipe Finder
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    React / CSS / HTML / ReactStrap / BootStrap
                </CardSubtitle>
                </CardBody>
                <img
                alt="vegan recipe finder screenshot"
                src={ veganScreenShot }
                width="100%"
                />
                <CardBody>
                <CardText>
                "Vegan Recipe Finder" is a React web application I developed for myself.  Users are able to search for recipes based on ingredients they input.  The site then uses the search criteria to filter through recipes in an external API and return a list of corresponding recipes.
                </CardText>
                <CardLink href="https://veganrecipefinder.netlify.app/" target="_blank" rel="noopener noreferrer">
                    Check it out!
                </CardLink>
                <CardLink href="https://github.com/ronniexrogers/vegan-recipe-maker" target="_blank" rel="noopener noreferrer">
                    Github Repo
                </CardLink>
                </CardBody>
            </Card>
            </div>

            <div className="project-div">
            <Card>
                <CardBody>
                <CardTitle tag="h5">
                    21 (Blackjack)
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Javascript / CSS / HTML
                </CardSubtitle>
                </CardBody>
                <img
                alt="blackjack screenshot"
                src={ blackjackScreenShot }
                width="100%"
                />
                <CardBody>
                <CardText>
                My very first project is the classic casino game of Blackjack.  It is player vs an A.I. dealer.  The objective is to score as close to 21 as you can without going over.
                </CardText>
                <CardLink href="https://ronnie-rogers-blackjack.netlify.app/" target="_blank" rel="noopener noreferrer">
                    Check it out!
                </CardLink>
                <CardLink href="https://github.com/ronniexrogers/blackjack-game" target="_blank" rel="noopener noreferrer">
                    Github Repo
                </CardLink>
                </CardBody>
            </Card>
            </div>

        </div>
     )
}
 
export default Portfolio