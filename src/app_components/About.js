import { List } from "reactstrap"

const About = ({ titleAnimation }) => {
    return ( 
        <div className="about">
            <h3 className={ titleAnimation }>Who am I?</h3>
            <div className="about-text">
                My name is Ronnie Raymond Rogers. (Yes, my initials are RRR.) I'm a 28 year-old software engineer currently living in the Greater Los Angeles area.  I began my tech journey after spending the first 9 years of my professional career as an HVAC/R technician.  I began self-teaching web development by watching videos and completing courses on Free Code Camp.  After about six months of self-teaching, I enrolled in the Software Engineering Immersive course with General Assembly.  I graduated as of March 2022 and am currently seeking my first professional role as a developer.  
            </div>
            <br></br>
            <h3 className={ titleAnimation }>What am I in to?</h3>
            <div className="about-text">
                Aside from web development, some of my passions and interests include:
                <List type="unstyled">
                <ul className="list">
                    <li>Going to concerts</li>
                    <li>Fashion design</li>
                    <li>Gaming</li>
                    <li>Hiking</li>
                    <li>Traveling</li>
                </ul>
                </List>
            </div>
            <br></br>
            <h3 className={ titleAnimation }>What are my professional goals?</h3>
            <div className="about-text">
                My goal is to land a position in a field that I am passionate about and already knowledgable in.  I would love to work in a role as a developer for a fashion company, mental health/wellness company, gaming company, or HVAC/R company.  I feel it is much more fulfilling to work on projects where you are passionate about the product.
            </div>
            <br></br>
        </div>
     )
}
 
export default About