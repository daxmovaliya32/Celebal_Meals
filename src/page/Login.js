import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password} = formData;
    if (password && email) {
    const fetchData = await fetch("http://localhost:8080/user/login",{
            method : "POST",
            headers : {
              "content-type" : "application/json" 
            },
            body : JSON.stringify(formData)
          })
        const dataRes = await fetchData.json()
        console.log(dataRes);
        localStorage.setItem("token",dataRes.data);
        if(dataRes.admin)
        {
          navigate("/orders")
        }else{
          alert(dataRes.message)
          if(dataRes.alert){
            navigate("/") 
          }
        }
        
       
    } else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

