import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // Optionally collect the form data here
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    console.log("Form submitted:", formData); // log data for now

    // Redirect to home
    navigate("/");
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
          <input type="text" id="name" name="name" placeholder="John Doe" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="johndoe@example.com" />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Phone Number" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="I have a project in mind..." />

          <button type="submit" className="btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}

