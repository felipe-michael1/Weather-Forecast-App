import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log({ email, password });
      setLoading(false);
      navigate("/dashboard");
    }, 700);
  };

  return (
    
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center bg-light">
      <h2 className="text-center mb-4">Welcome to the Weather <strong>ForeCast App</strong>: </h2>
      <div className="card shadow p-4" style={{ width: 350 }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="mb-3">
          New account? <Link to='/register'>Register Here!</Link>
        </div>
      </div>
    </div>
  );
}
