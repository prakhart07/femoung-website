import menu1 from '../assets/images/food-menu-1.png';
import menu2 from '../assets/images/food-menu-2.png';
import menu3 from '../assets/images/food-menu-3.png';
import menu4 from '../assets/images/food-menu-4.png';
import menu5 from '../assets/images/food-menu-5.png';
import menu6 from '../assets/images/food-menu-6.png';

function Menu(){

    return(
        <section className="section food-menu" id="food-menu">
        <div className="container">

          <p className="section-subtitle">Popular Dishes</p>

          <h2 className="h2 section-title">
            Our Delicious <span className="span">Foods</span>
          </h2>

          <p className="section-text">
            Food is any substance consumed to provide nutritional support for an organism.
          </p>

          <ul className="fiter-list">

            <li>
              <button className="filter-btn  active">All</button>
            </li>

            <li>
              <button className="filter-btn">Momos</button>
            </li>

            <li>
              <button className="filter-btn">Combos</button>
            </li>

            <li>
              <button className="filter-btn">Drinks</button>
            </li>

            <li>
              <button className="filter-btn">Special</button>
            </li>

          </ul>

          <ul className="food-menu-list">

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src={menu1} width="300" height="300" loading="lazy"
                    alt="Fried Chicken Unlimited" className="w-100"/>

                  <div className="badge">-15%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Momos</p>

                  {/* <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div> */}
                </div>

                <h3 className="h3 card-title">Steam Momos</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price">₹39.00</data>

                  <del className="del" value="69.00">₹49.00</del>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src={menu2} width="300" height="300" loading="lazy"
                    alt="Burger King Whopper" className="w-100"/>

                  <div className="badge">-10%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Combo</p>

                  {/* <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div> */}
                </div>

                <h3 className="h3 card-title">Momos + Coke</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="29.00">₹49.00</data>

                  <del className="del">₹59.00</del>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src={menu3} width="300" height="300" loading="lazy"
                    alt="White Castle Pizzas" className="w-100"/>

                  <div className="badge">-25%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Drinks</p>

                  {/* <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div> */}
                </div>

                <h3 className="h3 card-title">Cold Coffee</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">₹59.00</data>

                  <del className="del">₹69.00</del>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src={menu4} width="300" height="300" loading="lazy"
                    alt="Bell Burrito Supreme" className="w-100"/>

                  <div className="badge">-20%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Special</p>

                  {/* <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div> */}
                </div>

                <h3 className="h3 card-title">Khakhra Pizza</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="59.00 ">₹69.00</data>

                  <del className="del">₹79.00</del>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src={menu5} width="300" height="300" loading="lazy"
                    alt="Kung Pao Chicken BBQ" className="w-100"/>

                  <div className="badge">-5%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Special</p>

                  {/* <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div> */}
                </div>

                <h3 className="h3 card-title">Veggie Cheese</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">₹69.00</data>

                  <del className="del">₹79.00</del>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src={menu6} width="300" height="300" loading="lazy"
                    alt="Wendy's Chicken" className="w-100"/>

                  <div className="badge">-15%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Special</p>

                  {/* <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div> */}
                </div>

                <h3 className="h3 card-title">Cone chat</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">₹69.00</data>

                  <del className="del">₹79.00</del>

                </div>

              </div>
            </li>

          </ul>


        </div>
      </section>
    );
}

export default Menu;