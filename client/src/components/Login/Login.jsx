import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from '../store/auth';
import './Login.scss';

const URL = "http://localhost:3000/api/login"


const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS }  = useAuth();


  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      console.log("Login form", response);
      if (response.ok) {
        alert("Login successful!")

        const res_data = await response.json();

        // localStorage.setItem("token",res_data.token)

        storeTokenInLS(res_data.token);

        setUser({
          email: "",
          password: "",
        });

        navigate("/track")
      } else {
        alert("Invalid credentials")
        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-form">
                <h1 className='main-heading mb-3'>Login</h1>

                <br />

                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name='email'
                      placeholder='Enter your email'
                      id='email'
                      required
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInput}

                      className="form-input"

                    /></div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name='password'
                      placeholder='Enter your Password'
                      id='password'
                      required
                      autoComplete='off'
                      value={user.password}
                      onChange={handleInput}
                      className="form-input"
                    />
                  </div>
                  <br />
                  <button type='submit' className="submit-button">Login</button>
                  <br />
                  <br />
                  Don't have an account ?
                  <br />
                  <br />
                  <Link to={"/register"}><button className="submit-button">Register Here</button></Link>
                </form>



              </div>
            </div>
          </div>
        </main>
      </section>


    </>
  )
}

export default Login



