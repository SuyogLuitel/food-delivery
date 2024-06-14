import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Login')
    return (
        <div className='login'>
            <form className='login-container'>
                <div className='login-title'>
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} alt="cross" onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-input">
                    {currentState === 'Login' ? <></> :
                        <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                    <button>{currentState === "Sign Up" ? "Create an account" : "Login"}</button>
                </div>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState === 'Login'
                    ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login
