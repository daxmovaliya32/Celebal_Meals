import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { firstName, lastName,email, password} = formData;
    if (firstName && lastName && password && email) {
    const fetchData = await fetch("http://localhost:8080/user/signup",{
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(formData)
          })
        // console.log(fetchData);
        const dataRes = await fetchData.json()
        console.log(dataRes);
        alert(dataRes.message)
        if(dataRes.alert){
          navigate("/login")
        }
       
    } else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <div>
          <p>if you have account then please <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
