import React from 'react';

import './Login.css'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="Formulario" action="">
      <h1 className="tittle">Login</h1>
      <label for="">
        <i className="fa-solid fa-user"></i>
        <input
          placeholder="username"
          type="text"
          id="username">
        </input>
      </label>
      <label for="">
        <i className="fa-solid fa-lock"></i>
        <input 
          placeholder="password"
          type="password"
          id="password">
        </input>
      </label>
      <a href="#" className="link">Forgot your password?</a>
      {/*No dejar presionar cuando el input este vacio*/}
      <button 
        onSubmit={handleSubmit}
        id="button"
      >Login
      </button>
    </form>
  )
};

export default Login;
