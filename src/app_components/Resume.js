import { Button } from 'reactstrap'

const Resume = ({ titleAnimation }) => {

    const resume = require('./Resources/Ronnie-Rogers-Resume.pdf')

    return ( 
        <div className="resume">

            <h3 className={ titleAnimation }>Résumé</h3>

            <div className="download">
            <a download href={ resume }>
            <Button color="primary" size="lg" block >
                Download Résumé
            </Button>
            </a>
            </div>
            <div className="pdf">
            <object className='pdf-object' data={resume} type="application/pdf">
                <p>PDF not displaying for you? Click <a href={ resume } target="_blank" rel="noopener noreferrer">here</a> to view it.</p>
            </object>
            </div>

        </div>
     )
}
 
export default Resume