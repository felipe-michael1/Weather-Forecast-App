import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { api } from "../components/Api";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {

            const response = await api.post("/register", {
                username: name,
                email: email,
                password: password
            });

            console.log(response.data);
            alert("User registered successfully!");

            setName("");
            setEmail("");
            setPassword("");

        } catch (error) {

            console.error(error);
            alert("Error registering user");

        }
    }

    return (

        <div className="d-flex flex-column vh-100 justify-content-center align-items-center bg-light">

            <div className="card shadow p-4" style={{ width: 350 }}>

                <h3 className="text-center mb-4">Create a New Account</h3>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

                <div className="mt-3 text-center">
                    Return to Login: <Link to="/">Return Now!</Link>
                </div>

            </div>

        </div>
    );
}

export default Register;