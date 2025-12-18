
function Contact(){
    return(
        <>
        <div className="container">
            <h3 className="text-center">Contact Us</h3>
            <div className="row pt-5">
                <div className="col-md-4">
                <h4>Address:</h4>
                <p>198 West 21th Street,<br/> Suite 721 New York NY<br/> 10016</p>
                </div>
                <div className="col-md-4">
                    <h4>Phone:</h4>
                    <p>+ 1235 2355 98</p>
                </div>
                <div className="col-md-4">
                    <h4>Email:</h4>
                    <p>info@yoursite.com</p>
                 </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h2 className="text-center">If you got any questions please do not hesitate to send us a message.</h2>
                    <form className="contact-form">
  <input type="text" id="name" placeholder="Your Name" />
  <input type="email" id="email" placeholder="Your Email" />
  <input type="text" id="subject" placeholder="Subject" />
  <textarea id="message" placeholder="Message"></textarea>
  <button type="submit">Send Message</button>
</form>
             
                </div>

            </div>
        </div>
         </>
    )
}
export default Contact