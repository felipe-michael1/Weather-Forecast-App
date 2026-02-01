import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
    return(
        <div className="d-flex flex-column vh-100 justify-content-center align-items-center bg-light">
        <div className="card shadow p-4" style={{ width: 350 }}>
            <h3 className="text-center mb-4">Create a New Account</h3>
            <form>

            <div className="mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
                value=""
                />
            </div>
            <div className="mb-3">
                <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                />
            </div>

            <div className="mb-3">
                <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                />
            </div>

              <div className="mb-3">
                <input
                type="password"
                className="form-control"
                placeholder="Rewrite Password"
                required
                />
            </div>

            <button
                className="btn btn-primary w-100"
                type="submit"
            >
                Create new Account
            </button>
            </form>
            <div className="mb-3">
                Return to Login: <Link to='/'>Return Now!</Link>
            </div>
        </div>
        </div>
    );
}