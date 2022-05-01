const Contact = () => {
    return ( 
        <div className="contact">
            <form action="https://submit-form.com/ageibyG6">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required="true" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required="true" />
                <label for="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required="true"
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
     )
}
 
export default Contact