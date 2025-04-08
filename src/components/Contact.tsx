

function Contact(){

    return (
        <section>
            <form>
                <label htmlFor="name">Name</label>
                <input name="name" type="text"/>

                <label htmlFor="firstname">Firstname</label>
                <input name="firstname" type="text"/>

                <label htmlFor="email">Email</label>
                <input name="email" type="email"/>

                <textarea name="message" rows="5" cols="30"></textarea>
            </form>
        </section>
    )
}

export default Contact;