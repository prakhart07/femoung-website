
import './App.css';
import { Header } from './Pages/header';
import Home from './Pages/homes';
import heroBgImage from './assets/images/hero-banner.png';
import heroBannerBgImage from '../src/assets/images/hero-banner-bg.png';
import heroBannerImage from '../src/assets/images/hero-bg.jpg';
import Footer from './Pages/footer';
import Dishes from './Pages/dishes';
import Menu from './Pages/menu';
import ComboDisplay from './Pages/comboDisplay';
import AboutUs from './Pages/aboutUs';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <main>
        <ComboDisplay/>
        <Dishes/>
        <Menu/>
        <AboutUs/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
