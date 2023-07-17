import forest from './images/forest.jpg';
import './App.css';
import { useState } from 'react';
import google from './icons/google.svg';
import signup from './icons/signUp.svg'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const Login_wrapper = {
    background: `url(${forest})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  };
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  };
  


  return (
    <div className="App">
      <div className='Authorithation_Form'>
        <div className={isLoggedIn? 'signUp_wrapper hidden':'signUp_wrapper actived'}>
          <div className='title'>

              <span>START FOR FREE</span>

              <h2> Create <br/> your account </h2>


          </div>


          <form className='SignUp_form'>
    <input type='text' name='firstName' id='firstNameInput' placeholder='First name' />
    <input type='text' name='lastName' id='lastNameInput' placeholder='Last name' />
    <input type='email' name='email' id='emailInput' placeholder='E-mail' />
    <input type='password' name='password' id='passwordInput' placeholder='Password' />

      <button type='submit' >Create account</button>

  

  </form>


      </div>





        <div className={isLoggedIn?'Login_wrapper opened':'Login_wrapper'} style={Login_wrapper}>
          
          
            <div className={isLoggedIn?'Login_wrapper__text next':'Login_wrapper__text'}>
                <p>Already a member?</p>

                <button  onClick={handleLogin} className='log_in__button'>Log in</button>       


            

            </div>

       
            <form className={isLoggedIn?'Login_wrappers__form LoginActive':'Login_wrappers__form'}>
              
              <img  onClick={()=>{  setIsLoggedIn(!isLoggedIn)}} className='signup_button' src={signup}></img>

                <h2>Welcome back!</h2>

                <input type='text' name='LoginName'  placeholder='Your name or e-mail' />
  
                <input type='password' name='LoginPassword' id='passwordInput' placeholder='Password' />

                <div className='Auth_ways'>  
                
                <a className='google_auth'>
                <p>Sign in with Google</p>
                  <img src={google}></img>
                </a>


                <button  className='SignIn-button' type='submit'>LOGIN</button>
                  

                
                
                  </div>


            </form>
          
          
              
          
          
          </div> 
      </div>
    </div>
  );
}

export default App;