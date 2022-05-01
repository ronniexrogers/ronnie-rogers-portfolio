import { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
const axios = require('axios')

const Contact = () => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const formSparkUrl = `https://submit-form.com/ageibyG6`

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postSubmission()
    }

    const postSubmission = async () => {
        const formData = {
            name: name,
            email: email,
            message: message,
        }
        try {
            await axios.post(formSparkUrl, formData)
        }catch(err) {
            alert(err)
        }
    }

    return ( 
        <div className="contact">
            <Form onSubmit={ handleSubmit }>
                <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" id="name" name="name" placeholder="Name" required="true" onChange={(e) => setName(e.target.value)}  />
                </FormGroup>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" name="email" placeholder="Email" required="true" onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <Label for="message">Message</Label>
                <Input
                    type="textarea"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required="true"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button color="primary" block type="submit">Send</Button>
            </Form>
        </div>
     )
}
 
export default Contact