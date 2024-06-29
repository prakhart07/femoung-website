import AboutUs from "./aboutUs";
import ComboDisplay from "./comboDisplay";
import Dishes from "./dishes";
import Footer from "./footer";
import Home from "./homes";
import Login from "./login";
import Menu from "./menu";


function MainScreen(){

    return(
        <div className="main">
            <Home/>
      <main>
            <ComboDisplay/>
            <Dishes/>
            <Menu/>
            <AboutUs/>
      </main>
            <Footer/>
        </div>
    )
}

export default MainScreen;