function Footer(){
    return(
        <footer>
       <div className="container pt-5">
        <div className="row">
        <div className="col-md-2">
            <h3>Uptown</h3>
            <p>Far far away, behind the word mountains, far from the countries.</p>
        </div>
        <div className="col-md-2">
            <h3>Community</h3>
            <ul className="footer-ul">
                <li>   <a href="#">Search Properties</a></li>
                <li>  <a href="#">For Agents</a></li>
                <li>    <a href="#">Reviews</a></li>
                <li>   <a href="#">FAQs</a></li>
            </ul>
         
          
        
         

        </div>
        <div className="col-md-2">
            <h3>About Us</h3>
            <ul className="footer-ul">
                <li>   <a href="#">Our Story</a></li>
                <li><a href="#">Meet the team</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
        <div className="col-md-2">
            <h3>Company</h3>
            <ul className="footer-ul">
                <li>   <a href="#">About Us</a></li>
                <li>
                <a href="#">Press</a></li>
                <li>   <a href="#">Contact</a></li>
                <li>Careers</li>

            </ul>
        </div>
        <div className="col-md-2">
            <h3>Have a Questions?</h3>
            <p>123 zebronics street, North west, Codevile</p>
            <p>+91 123456789</p>
            <p>info@emailid.com</p>
        </div>
        </div>
        <div className="social">
         
             <a href="https://twitter.com/yourhandle" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-twitter" style={{ fontSize: '2.5rem',marginRight:'20px',color:'#e86ed0' }}></i>
</a>

<a href="https://facebook.com/yourpage" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-facebook" style={{ fontSize: '2.5rem',marginRight:'20px',color:'#e86ed0' }}></i>
</a>

<a href="https://instagram.com/yourhandle" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
  <i className="bi bi-instagram" style={{ fontSize: '2.5rem',marginRight:'20px',color:'#e86ed0' }}></i>
</a>

      
        </div>
       </div>
        </footer>
    )
}

export default Footer