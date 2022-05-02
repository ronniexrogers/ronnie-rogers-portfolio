import { useRef, useState } from "react"
import { Button, Form, FormGroup, Input } from 'reactstrap'
import ReCAPTCHA from "react-google-recaptcha"
const axios = require('axios')

const Contact = () => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [recaptchaToken, setRecaptchaToken] = useState('')
    const recaptchaKey = '6LdcgLcfAAAAAHcB1XBHPPWwDN3jGzlad98BYcRa'
    const recaptchaRef = useRef()
    const formId = 'ageibyG6'
    const formSparkUrl = `https://submit-form.com/${formId}`

    const updateRecaptchaToken = (token) => {
        setRecaptchaToken(token)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postSubmission()
    }

    const postSubmission = async () => {
        const formData = {
            name: name,
            email: email,
            message: message,
            "g-recaptcha-response": recaptchaToken
        }
        try {
            await axios.post(formSparkUrl, formData)
            recaptchaRef.current.reset()
        }catch(err) {
            alert(err)
        }
    }

    return ( 
        <div className="contact">
            <h3>Let's get in touch!</h3>
        <div className="contact-form">
            <Form onSubmit={ handleSubmit }>
                <FormGroup>
                <Input type="text" id="name" name="name" placeholder="Name" required="true" onChange={(e) => setName(e.target.value)}  />
                </FormGroup>
                <FormGroup>
                <Input type="email" id="email" name="email" placeholder="Email" required="true" onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <Input
                    type="textarea"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required="true"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <ReCAPTCHA 
                className="captcha"
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={updateRecaptchaToken}
                />
                <Button className="form-button" color="primary" block type="submit">Send</Button>
            </Form>
            </div>
        </div>
     )
}
 
export default Contact