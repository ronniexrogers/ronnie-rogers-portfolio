import { Button } from 'reactstrap'

const Resume = () => {

    const resume = require('./Resources/Ronnie-Rogers-Resume.pdf')

    return ( 
        <div className="resume">

            <h3>Résumé</h3>

            <div className="download">
            <a download href={ resume }>
            <Button color="primary" size="lg" block >
                Download Résumé
            </Button>
            </a>
            </div>
            <div className="pdf">
            <object className='pdf-object' data={resume} type="application/pdf">
            </object>
            </div>

        </div>
     )
}
 
export default Resume