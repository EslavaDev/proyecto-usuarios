import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import "../styles/Login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isLogged: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.setState({ isLogged:true });
    } else {
      alert("credenciales incorrecta");
      this.setState({ isLogged:false });
    }
    this.setState({ username: "", password: "" });
  }
  render() {
    return (
      <div className="Login">
        {this.state.isLogged ? (
          <Redirect to="/home" />
        ) : (
          <div className="Login-Box">
            <form onSubmit={this.onSubmit}>
              <div className="Login-box-databox">
                <label className="Login-box-username">Username</label>
                <input
                  className="Login-username-input"
                  type="text"
                  value={this.state.username}
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                />
              </div>

              <div className="Login-box-databox">
                <label className="Login-box-password">Password</label>
                <input
                  className="Login-username-input"
                  type="password"
                  value={this.state.password}
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>

              <button type="submit" className="Login-submit">
                Iniciar Sesion
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
