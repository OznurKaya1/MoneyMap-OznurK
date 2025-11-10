import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import LoginPage from './Images/LoginPage.jpg'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError("Please enter both email and password.")
            return
        }

        if (!email.includes("@") || !email.includes(".")) {
            setError("Please enter a valid email address.")
            return
        }

        if (!/\d/.test(password)) {
            setError("Your password must have at least one number.")
            return
        }

        if (!/[A-Z]/.test(password)) {
            setError("Your password must have at least one capital letter.")
            return
        }


        navigate("/dashboard")
    }

    return (
        <div class='login-page'
            style={{
                backgroundImage: `url(${LoginPage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',

            }}>
            <form class='container'>
                <div className='input-box'>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className='input-box'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className='error-message'>{error}</p>}

                <button type='submit' class='btn' onClick={handleLogin}>Login</button>

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
