function Footer() {
    return(
        <>
            <div className="footerWrap mt-5 w-100">
                <div className="subscribe-footer bg-info">
                    <div className="container text-light text-center py-5">
                        <h3>LET'S MOVE THIS ADVENTURE TO YOUR INBOX</h3>
                        <div className="d-flex w-50 mx-auto justify-content-center gap-5">
                            <input className="form-control w-50 my-3" type="email" placeholder="Enter your email here..." />
                            <button className="btn btn-dark my-3">Let's Go!</button>
                        </div>
                        <div className="w-25 mx-auto d-flex justify-content-evenly fs-3">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-linkedin"></i>
                            <i className="bi bi-twitter"></i>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="contact-footer bg-dark py-3 text-center">
                    <h1 className="text-light">Contact Us</h1>
                    <div className="text-light text-center pt-3">
                        <h3>Want to know more about Philippines?</h3>
                    </div>
                    <div>
                        <form className="w-50 mx-auto myForm">
                            <input className="form-control my-2 form-item1" type="text" placeholder="Your name" />
                            <input className="form-control my-2 form-item2" type="email" placeholder="Your email" />
                            <textarea className="form-control my-2 form-item3" placeholder="Message"></textarea>
                            <button className="btn btn-primary my-2 form-item4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;