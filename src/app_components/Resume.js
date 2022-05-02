import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
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
            <Document file={ resume }>
                <Page pageNumber={1} />
                <Page pageNumber={2} />
            </Document>
            </div>

        </div>
     )
}
 
export default Resume