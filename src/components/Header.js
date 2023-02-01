import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link" exact to='/'> Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" exact to='/Doctor-Speciality'> Doctor Speciality</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" exact to='/add-Speciality'> Add Speciality</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" exact to='/edit-Speciality/:id'> Edit Speciality</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Header;