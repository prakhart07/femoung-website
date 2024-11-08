import AboutUs from "./aboutUs";
import ComboDisplay from "./comboDisplay";
import ComingSoon from "./ComingSoon";
import Dishes from "./dishes";
import Footer from "./footer";
import  Header  from "./header";
import Home from "./homes";
import Login from "./login";
import Menu from "./menu";
import '../assets/css/ComingSoon.css'
import { useState,useNavigate,useEffect } from "react";

function MainScreen(){
  const [modalOpan , setModalOpen]=useState(false);
    useEffect(()=>{
        setTimeout(()=>{
         setModalOpen(true); 
        },3000)
    })

    return( 
        <>       
            {modalOpan ? <ComingSoon/> : 
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
            </div>}
            </>
    )
}

export default MainScreen;