import '../assets/css/style.css';



export function Header(){



    return(
        <header className="header" data-header>
    <div className="container">

      <h1>
        <a href="#" className="logo">femoungg<span className="span">.</span></a>
      </h1>

      <nav className="navbar" data-navbar>
        <ul className="navbar-list">

          <li className="nav-item">
            <a href="#home" className="navbar-link" data-nav-link>Home</a>
          </li>

          <li className="nav-item">
            <a href="#food-menu" className="navbar-link" data-nav-link>Shop</a>
          </li>

          <li className="nav-item">
            <a href="#about" className="navbar-link" data-nav-link>About Us</a>
          </li>

          {/* <li className="nav-item">
            <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
          </li> */}

          <li className="nav-item">
            <a href="#footer" className="navbar-link" data-nav-link>Contact Us</a>
          </li>

        </ul>
      </nav>

      <div className="header-btn-group">
        <button className="search-btn" aria-label="Search" data-search-btn>
          <ion-icon name="search-outline"></ion-icon>
        </button>

        <button className="btn btn-hover">Order Now</button>

        <button className="nav-toggle-btn" aria-label="Toggle Menu" data-menu-toggle-btn>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </button>
      </div>

    </div>
  </header>
    )
}