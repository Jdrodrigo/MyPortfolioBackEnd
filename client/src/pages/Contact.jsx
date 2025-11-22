import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  // React state for controlled inputs
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input updates
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to your backend API
      await axios.post("http://localhost:3000/api/contacts", form);

      alert("Message successfully sent!");

      // Redirect as your original code did
      navigate("/");
    } catch (error) {
      alert("Failed to send message.");
      console.log(error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h1>GET IN TOUCH</h1>
        <p>
          Reach out for collaborations, questions, or just to say hi.
          I’m always open to connect!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="I have a project in mind..."
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
