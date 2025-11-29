import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";

const EducationAdmin = () => {
  const { user, token } = useAuth();

  // Restrict page to admin users only
  if (!user || user.role !== "admin") {
    return <h2>Access Denied. Admins Only.</h2>;
  }

  // State for form input
  const [form, setForm] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: "",
  });

  // Stores all qualifications
  const [educationList, setEducationList] = useState([]);

  // Load qualifications on page load
  useEffect(() => {
    fetchEducation();
  }, []);

  // GET all qualifications
  const fetchEducation = async () => {
    const res = await axios.get(
      "https://baldovinoporfolio.onrender.com/api/qualifications",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    setEducationList(res.data);
  };

  // Update form values
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE qualification
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "https://baldovinoporfolio.onrender.com/api/qualifications",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Education added!");

    setForm({
      title: "",
      firstname: "",
      lastname: "",
      email: "",
      completion: "",
      description: "",
    });

    fetchEducation();
  };

  // DELETE qualification
  const deleteEducation = async (id) => {
    await axios.delete(
      `https://baldovinoporfolio.onrender.com/api/qualifications/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    fetchEducation();
  };

  return (
    <div className="container">
      <h1>Education Admin Panel</h1>

      {/* FORM: CREATE NEW ENTRY */}
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="firstname"
          placeholder="First Name"
          value={form.firstname}
          onChange={handleChange}
          required
        />

        <input
          name="lastname"
          placeholder="Last Name"
          value={form.lastname}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="completion"
          placeholder="Completion Year"
          value={form.completion}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Add Education</button>
      </form>

      <hr />

      {/* LIST ALL ENTRIES */}
      <h2>Existing Education Entries</h2>

      {educationList.map((item) => (
        <div key={item._id} className="education-card">
          <h3>{item.title}</h3>

          <p><strong>{item.firstname} {item.lastname}</strong></p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Completed:</strong> {item.completion}</p>
          <p>{item.description}</p>

          <button
            onClick={() => deleteEducation(item._id)}
            className="btn-delete"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default EducationAdmin;
