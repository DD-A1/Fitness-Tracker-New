import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [error, setError] = useState(null);

  const handleLogin = async (formData) => {
    setError(null);

    try {
      await login({
        username: formData.get("username"),
        password: formData.get("password"),
      });

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>Log in to your account</h1>

      <form action={handleLogin}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>

        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
        {error && <p role="alert">{error}</p>}
      </form>

      <button type="button" onClick={() => navigate("/register")}>
        Need an account? Register here.
      </button>
    </>
  );
}
