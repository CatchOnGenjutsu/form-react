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
            <Link className="Links-nav" to="/login">LOGIN</Link>
            <Link className="Links-nav" to="/reg">REGISTER</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/reg" element={<RegistrationForm />}/>
          <Route
              path="*"
              element={<Navigate to="/login" replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}