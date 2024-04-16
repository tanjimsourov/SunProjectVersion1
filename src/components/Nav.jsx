import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {

  return (
    <div className="nav">
      <ul className="lists">
        <li className="list">
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className="list">
          <NavLink activeClassName="active" to="/second-page">
            Second Page
          </NavLink>
        </li>
        <li className="list">
          <NavLink activeClassName="active" to="/third-page">
            Third Page
          </NavLink>
        </li>
        <li className="list">
          <NavLink activeClassName="active" to="/fourth-page">
            Fourth Page
          </NavLink>
        </li>
        <li className="list">
          <NavLink activeClassName="active" to="/fifth-page">
            Fifth Page
          </NavLink>
        </li>
        <li className="list">
          <NavLink activeClassName="active" to="/sixth-page">
            Sixth Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
