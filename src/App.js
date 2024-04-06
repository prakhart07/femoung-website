import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
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
import Order from './Pages/order';
import MainScreen from './Pages/mainScreen';


function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <Router>
        <Routes>
          <Route path='*' element={<MainScreen/>}></Route>
          <Route path='/' element={<MainScreen/>}></Route>
          <Route path='/order' element={<Order/>}></Route>
        </Routes>
      </Router> 
      </div>      
    </div>
  );
}

export default App;
