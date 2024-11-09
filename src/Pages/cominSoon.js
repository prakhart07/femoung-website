import { useState,useEffect } from "react";
import '../assets/css/ComingSoon.css';

function ComingSoon(){

        const [slideUp, setSlideUp] = useState(false);
      
        useEffect(() => {
            // Delay the slide-up animation by 3 seconds
            const timer = setTimeout(() => {
              setSlideUp(true);
            }, 3000);
        
            // Clean up the timeout if the component unmounts
            return () => clearTimeout(timer);
          }, []);

    return(
        <div className={`coming-soon-container ${slideUp ? 'slide-up' : ''}`}>
      <h1>Coming Soon!</h1>
    </div>
    )
}

export default ComingSoon;