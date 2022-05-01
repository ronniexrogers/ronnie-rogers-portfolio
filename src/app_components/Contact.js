import { useState } from "react"
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
            <form onSubmit={ handleSubmit }>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required="true" onChange={(e) => setName(e.target.value)}  />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required="true" onChange={(e) => setEmail(e.target.value)}/>
                <label for="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required="true"
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
     )
}
 
export default Contact