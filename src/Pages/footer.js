import footerIllustration from '../assets/images/footer-illustration.png'; //footer-illustration.png

 function Footer(){

    return(
        <div>
           <footer className="footer" id="footer">
      <div className="footer-top" style={{ backgroundImage: `url(${footerIllustration})` }}>
        <div className="container">
          <div className="footer-brand">
            <a href="" className="logo">femoungg<span className="span">.</span></a>
            <p className="footer-text">
              Creating Food Culture
            </p>
            <ul className="social-list">
              <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-pinterest"></ion-icon></a></li>
            </ul>
          </div>
          <ul className="footer-list">
            <li><p className="footer-list-title">Contact Info</p></li>
            <li><p className="footer-list-item">+91 12345-67890</p></li>
            <li><p className="footer-list-item">Info@femoungg.com</p></li>
            <li><address className="footer-list-item">Meghdoot Food Street,
            Indore M.P.</address></li>
          </ul>
          <ul className="footer-list">
            <li><p className="footer-list-title">Opening Hours</p></li>
            <li><p className="footer-list-item">Monday-Friday: 06:00-11:00pm</p></li>
            <li><p className="footer-list-item">Saturday-Sunday: 05:00-11:30pm</p></li>
          </ul>
          <form action="" className="footer-form">
            <p className="footer-list-title">Book a Table</p>
            <div className="input-wrapper">
              <input type="text" name="full_name" required placeholder="Your Name" aria-label="Your Name" className="input-field" />
              <input type="email" name="email_address" required placeholder="Email" aria-label="Email" className="input-field" />
            </div>
            <div className="input-wrapper">
              <select name="total_person" aria-label="Total person" className="input-field">
                <option value="person">Person</option>
                <option value="2 person">2 Person</option>
                <option value="3 person">3 Person</option>
                <option value="4 person">4 Person</option>
                <option value="5 person">5 Person</option>
              </select>
              <input type="date" name="booking_date" aria-label="Reservation date" className="input-field" />
            </div>
            <textarea name="message" required placeholder="Message" aria-label="Message" className="input-field"></textarea>
            <button type="submit" className="btn">Book a Table</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; 2024 <a href="#" className="copyright-link">femoungg</a> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
        </div>
    )
}
export default Footer;