import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from '../store/auth';
import "./Register.scss"


const URL = "http://localhost:3000/api/register";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();


 
  const { storeTokenInLS } = useAuth()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {

        const res_data = await response.json();
        console.log("Response from server !", res_data);

        storeTokenInLS(res_data.token)
        // localStorage.setItem("token",res_data)

        alert("Registered Successfuly !");
        setFormData({
          username: '',
          email: '',
          phone: '',
          password: ''
        });
        navigate("/track")

      }
    } catch (error) {
      alert("Something went wrong !");
      console.log(" Error", error);
    }
  };

  return (
    <>
      <div className="register-container">
        <h2 className="register-heading">Register</h2>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username:</label>
            <input

              className="form-input"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete='off'
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete='off'
            />
          </div>
          <div>
            <label htmlFor="phone" className="form-label">Phone:</label>
            <input
              className="form-input"
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete='off'
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete='off'
            />
          </div>
          <button className="submit-button" type="submit">Register</button>
          <br />
          Already have an account ?
          <Link to={"/login"}><br></br><button className="submit-button" >Login here</button></Link>
        </form>
      </div>
    </>
  );
};

export default Register;
