import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router";

/** A form that allows users to register for a new account. */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleRegister = async (formData) => {
    setError(null);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await register({
        username,
        password,
      });

      navigate("/activities");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>Register for an account</h1>

      <form action={handleRegister}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>

        <label>
          Password
          <input type="password" name="password" minLength={8} required />
        </label>

        <button type="submit">Register</button>

        {error && <p role="alert">{error}</p>}
      </form>

      <button type="button" onClick={() => navigate("/login")}>
        Already have an account? Log in here.
      </button>
    </>
  );
}
