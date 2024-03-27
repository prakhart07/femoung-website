import aboutBanner from '../assets/images/sale-shape-red.png';
import combo from '../assets/images/momo+coke.jpg'; //sale-shape-red.png

function ComboDisplay(){

    return(
        <section className="section section-divider gray about">
        <div className="container">

          <div className="about-banner">
            <img src={combo} width="970" height="600" loading="lazy" alt="Burger with Drinks"
              className="w-100 about-img"/>

            <img src={aboutBanner} width="150" height="150" alt="get up to 50% off now"
              className="abs-img scale-up-anim"/>
          </div>

          <div className="about-content">

            <h2 className="h2 section-title">
              Delecious Combo to rejoice yourself with
              <span className="span">Momos and Soft Drink!</span>
            </h2>

            <p className="section-text">
            The savory delight of steamed or fried momos, paired with the crisp and bubbly refreshment of 
            Coca-Cola, creates a harmonious balance of flavors that tantalizes the taste buds.
            </p>

            <ul className="about-list">

              <li className="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span className="span">Normal Momos +  Coke/ThumbsUp/Sprite/Fanta</span>
              </li>

              <li className="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span className="span">Cheese Momos +  Coke/ThumbsUp/Sprite/Fanta</span>
              </li>

              <li className="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span className="span">Panner Momos +  Coke/ThumbsUp/Sprite/Fanta</span>
              </li>

              {/* <li className="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span className="span">Fastest Food Home Delivery</span>
              </li> */}

            </ul>

            <button className="btn btn-hover">Order Now</button>

          </div>

        </div>
      </section> 
    );
}

export default ComboDisplay;