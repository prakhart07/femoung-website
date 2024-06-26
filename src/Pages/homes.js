import heroBgImage from '../assets/images/hero-banner.png';
import heroBannerBgImage from '../assets/images/hero-banner-bg.png';
import heroBannerImage from '../assets/images/hero-bg.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom";

 function Home(){

  const Navigate=useNavigate();

    function orderNow(){
        Navigate('/order');
    }

    return(
        <div>
            <section className="hero" id="home" style={{ backgroundImage: `url(${heroBannerImage})` }}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Eat Sleep And</p>
          <h2 className="h1 hero-title">Creating Food Culture</h2>
          <p className="hero-text">Food is any substance consumed to provide nutritional support for an organism.</p>
          <button className="btn" onClick={orderNow}>Book A Table</button>
        </div>
        <figure className="hero-banner">
          <img src={heroBannerBgImage} width="786" height="716" alt="" aria-hidden="true" className="w-100 hero-img-bg" />
          <img src={heroBgImage} width="786" height="637" loading="lazy" alt="Burger" className="w-100 hero-img" />
        </figure>
      </div>
    </section>

    <div className="search-container" data-search-container>
      <div className="search-box">
        <input type="search" name="search" aria-label="Search here" placeholder="Type keywords here..." className="search-input" />
        <button className="search-submit" aria-label="Submit search" data-search-submit-btn>
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn></button>
    </div>
        </div>
    )
}

export default Home;