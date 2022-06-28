import { useState } from 'react'
import { Button } from 'reactstrap'

const Resume = ({ titleAnimation }) => {

    const resume = require('./Resources/Ronnie-Rogers-Resume.pdf')
    const resumeJPG1 = require('./Resources/resume1.jpg')
    const resumeJPG2 = require('./Resources/resume2.jpg')

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
            <div className="isMobile">
                <img src={ resumeJPG1 } width="350px" alt="resume page one" />
                <img src={ resumeJPG2 } width="350px" alt="resume page two" />
            </div>
        </div>
     )
}

export default Resume