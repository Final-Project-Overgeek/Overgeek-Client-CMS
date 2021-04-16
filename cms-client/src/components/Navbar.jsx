import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();

  function changePage(params) {
    const { event, destination } = params;

    event.preventDefault();
    history.push('/' + destination);
  }
  return (
    <nav class="navbar navbar-expand-lg shadow navbar-light">
      <img src="../assets/navbar2.png" alt="logo" />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <span class="sr-only">ada</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={(event) => { changePage({ event, destination: '' }) }}>Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={(event) => { changePage({ event, destination: '/add-lecturer' }) }}>Add Lecturer</a>
          </li>
        </ul>
        <div>
          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
        </div>
      </div>
    </nav>
  )
}
