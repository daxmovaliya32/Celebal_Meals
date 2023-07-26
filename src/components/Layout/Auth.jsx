import React from 'react'
import { Link } from 'react-router-dom'
import "./Auth.css"

const Auth = () => {
   const isauth=localStorage.getItem("token");

  return (
    <div>
{!isauth && <button id='bt1'><Link to={"signup"} id='button'>SignUp</Link></button>}
    </div>
  )
}

export default Auth
