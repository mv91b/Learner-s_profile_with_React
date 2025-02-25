import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ title, aboutText, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {aboutText}
              </Link>
            </li>
          </ul>

          {/* Updated toggle switch */}
          <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onChange={toggleMode}
              checked={mode === "dark"}
            />
            <label className="form-check-label">
              {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}