import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Signin = () => {
  const navigate = useNavigate();

  // Access signin() from AuthContext to store token + user
  const { signin } = useAuth();

  // React state for email and password
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Update state when user types
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send login request to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST request to backend
      const res = await axios.post("http://localhost:3000/api/auth/signin", form);

      // Save user + token in context AND localStorage
      signin(res.data);

      alert("Signed in successfully!");

      // Redirect to homepage after login
      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;