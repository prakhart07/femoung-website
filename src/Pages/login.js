import { useState } from "react";
import {Modal} from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import  Fade  from "@mui/material/Fade";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: '400'
  };

function Login(){
    const Navigate=useNavigate();
    const [open,setOpen]=useState(true);
    const handleClose =()=>{
        setOpen(false);
        Navigate("/");
    } 

    return(
        
            
            <div className="">
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        id="modal"
      >
        <Fade in={open}>
          <Box sx={style}>
            <h6>Form</h6>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-3" style={{margin:"5px"}}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder=""
                  required
                  className=""
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-3" style={{margin:"5px"}}>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-sm" style={{margin:"5px"}}>
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
            </div>

            <div style={{margin:"5px"}}>
              <button
                type="submit"
                className="btn"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
          </Box>
        </Fade>
      </Modal>
            
      </div> 
      
    );


}
export default Login;