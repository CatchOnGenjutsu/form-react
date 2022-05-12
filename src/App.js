import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import './App.css';
import RegistrationForm from './register.js';
import Login from './login.js';
import 'antd/dist/antd.css'

export default function App() {
  return (
    <Router>
      <div>
        <h1 className="Nav-head">React:Form</h1>
        <nav>
          <div className="Navbar">
            <Link className="Links-nav" to="/form-react/">LOGIN</Link>
            <Link className="Links-nav" to="/form-react/reg">REGISTER</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/form-react/" element={<Login />}/>
          <Route path="/form-react/reg" element={<RegistrationForm />}/>
        </Routes>
      </div>
    </Router>
  );
}