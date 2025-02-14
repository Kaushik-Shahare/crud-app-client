import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "../services/authService";

const Register = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      toast.success("Registration successful");
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <div
      className="container custom-container my-5"
      style={{ backgroundColor: "#222", color: "#fff" }}
    >
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
        <a
          href="#/login"
          className="d-block mt-3 text-center"
          style={{ color: "#fff" }}
        >
          Already have an account? Login
        </a>
      </form>
    </div>
  );
};

export default Register;
