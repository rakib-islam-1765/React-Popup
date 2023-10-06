
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [show, setShow] = useState(0);

  const showHandler = () => {
    setShow(1);
  };

  const closeHandler = () =>  {
    setShow(0);
  };
  

  return (
  
      <div className='main-dev'>
        <div className="header-div">
        <h1>Login to <span className='header-span'>Continue!</span> </h1>
        <p>Thank you for joining us!</p>
        <button className='submit-btn' onClick={showHandler} >Click here to login</button>
        </div>




        {show ? (
          <div className='main-login-form'>
            <div class="loginform">
            <div class="overlay"></div>
          <div className='text-close'>
          <p>Login here</p>
          <div className="close-div">
          <button className="close-btn" onClick={closeHandler} > &#x2715; </button>
          </div>
          </div>
           <form action="">
             <label htmlFor="">Email</label> <br />
             <input type="text" /> <br />
             <label htmlFor="">Password</label> <br />
             <input type="password" /> <br />
             <a class="password">Forgot Password?</a>  <br />
             <input type="submit" value="Let’s Go"></input>
           </form>
   
          </div>
          </div>
        ) : (
          ""
       )}

      </div>
  )
}

export default App
