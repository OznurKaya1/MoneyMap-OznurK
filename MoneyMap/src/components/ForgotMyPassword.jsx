import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotMyPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleForgotMyPassword = (e) => {
        e.preventDefault();

        if (!email) {
            setError("Please enter your email.");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");
        navigate("/");
    }

    return (
        <div className="forgot-my-password">
            <form className="container" onSubmit={handleForgotMyPassword}>
                <h1>Please enter your email to <strong>reset</strong>your password</h1>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
}





