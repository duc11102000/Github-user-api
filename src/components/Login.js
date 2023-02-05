import "../App.scss";
import React, { useRef } from "react";
import Home from "../pages/Home";

function Login() {
  const userName = useRef();
  const password = useRef();
  const getuserName = localStorage.getItem("userNameData");
  const getPassword = localStorage.getItem("passwordData");

  function handleSubmit(e) {
    if (
      userName.current.value == "duc1110" &&
      password.current.value == "123"
    ) {
      localStorage.setItem("userNameData", "duc1110");
      localStorage.setItem("passwordData", "123");
    } else {
        alert("Wrong user name or password, try again !!!!");
    }
  }

  return (
    <div>
      {
        getuserName && getPassword ? 
        <Home /> :
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Login</h1>
          <div className="user-input">
            <input type="text" ref={userName} placeholder="Username" />
          </div>
          <div className="password-input">
            <input type="password" ref={password} placeholder="Password" />
          </div>
          <button>Login</button>
        </form>
      }
    </div>
  );
}

export default Login;
