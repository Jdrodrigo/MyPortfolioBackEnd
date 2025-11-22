import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // Store form input values using React state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Update state whenever the user types in an input box
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send the form data to the backend on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST request to backend (/api/users creates a new user)
      await axios.post("http://localhost:3000/api/users", form);

      alert("Signup successful! You can now sign in.");
      navigate("/signin"); // navigate to login page
    } catch (error) {
      alert(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>

      {/* Form controlled by React state */}
      <form onSubmit={handleSubmit}>
        
        {/* Full Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

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

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
