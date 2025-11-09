import React from 'react'
import { Link } from 'react-router-dom'



export default function Login() {
    return (
        <div className='login-page'>
            <form action='/submit' method='post'>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' name='email' placeholder='' required />
                <label htmlFor='password'>Enter your Password</label>
                <input type='password' id='password' name='password' placeholder='' required />
                <Link to='/dashboard'>
                    <button type='button'>Login</button>
                </Link>
                <p>
                    <Link to='/signup' className="clickable-underline">
                        Don't have an account?


                    </Link>
                </p>
                <p>
                    <Link to='/forgotmypassword' className="clickable-underline">
                        Forgot password?


                    </Link>
                </p>


            </form>
        </div>
    )
}



