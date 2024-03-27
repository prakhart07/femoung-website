import promo1 from '../assets/images/image (1).png';
import promo2 from '../assets/images/promo-2.png';
import promo3 from '../assets/images/promo-3.png';
import promo4 from '../assets/images/promo-4.png';
import promo5 from '../assets/images/promo-5.png';

function Dishes() {

    return (
        <section className="section section-divider white promo">
            <div className="container">

                <ul className="promo-list has-scrollbar">

                    <li className="promo-item">
                        <div className="promo-card">

                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none">
                                    <g clipPath="url(#A)" fill="#ff9d2d">
                                    </g>
                                    <defs>
                                        <clipPath id="A">
                                            <path fill="#fff" d="M0 0h60v60H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="h3 card-title">Momos</h3>

                            <p className="card-text">
                                Different flavours for different taste buds.
                            </p>

                            <img src={promo1} width="300" height="300" loading="lazy" alt="Maxican Pizza" className="w-100 card-banner" />

                        </div>
                    </li>
                    <li className="promo-item">
                        <div className="promo-card">

                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none">
                                    <g clip-path="url(#A)" fill="#ff9d2d">
                                    </g>
                                    <defs>
                                        <clipPath id="A">
                                            <path fill="#fff" d="M0 0h60v60H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="h3 card-title">Cold Coffee</h3>

                            <p className="card-text">
                                Refreshment revolutionzed with coffee.
                            </p>

                            <img src={promo2} width="300" height="300" loading="lazy" alt="Soft Drinks"
                                class="w-100 card-banner" />

                        </div>
                    </li>

                    <li className="promo-item">
                        <div className="promo-card">

                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none">
                                    <g clip-path="url(#A)" fill="#ff9d2d">
                                    </g>
                                    <defs>
                                        <clipPath id="A">
                                            <path fill="#fff" d="M0 0h60v60H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="h3 card-title">Special</h3>

                            <p className="card-text">
                                Continental and combinations of different  dishes is here.
                            </p>

                            <img src={promo3} width="300" height="300" loading="lazy" alt="French Fry"
                                className="w-100 card-banner" />

                        </div>
                    </li>

                    <li className="promo-item">
                        <div className="promo-card">

                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none">
                                    <g clip-path="url(#A)">

                                    </g>
                                    <defs>
                                        <clipPath id="A">
                                            <path fill="#fff" d="M0 0h60v60H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="h3 card-title">Soft Drinks</h3>

                            <p className="card-text">
                                Quench your thrust with regular soft drinks.
                            </p>

                            <img src={promo4} width="300" height="300" loading="lazy" alt="Burger Kingo"
                                className="w-100 card-banner" />

                        </div>
                    </li>

                    <li className="promo-item">
                        <div className="promo-card">

                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none">
                                    <g clip-path="url(#A)">

                                    </g>
                                    <defs>
                                        <clipPath id="A">
                                            <path fill="#fff" d="M0 0h60v60H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <h3 className="h3 card-title">Chicken Masala</h3>

                            <p className="card-text">
                                No non-veg items are not allowed for now.
                            </p>

                            <img src={promo5} width="300" height="300" loading="lazy" alt="Chicken Masala"
                                className="w-100 card-banner" />

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );

}

export default Dishes;