import AboutUs from "./aboutUs";
import ComboDisplay from "./comboDisplay";
import Dishes from "./dishes";
import Footer from "./footer";
import  Header  from "./header";
import Home from "./homes";
import Login from "./login";
import Menu from "./menu";


function MainScreen(){

    return(
        
        <div className="main">
            <div>
      <Header/>
      </div>
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