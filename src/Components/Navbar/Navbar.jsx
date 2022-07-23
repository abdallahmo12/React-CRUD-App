import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <NavLink className="navbar-brand fs-3 mx-5 fw-bold text-primary" to='React-CRUD-App/technews'>Tech Company</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto me-2">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to='React-CRUD-App/technews'>Technologies News</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link active"  to='React-CRUD-App/home'>Home</NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to='React-CRUD-App/about'>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='React-CRUD-App/parent'>Products</NavLink>
                </li>
              </ul>
            </div>
          </div>
      </nav>
      </div>
    )
  }
}
