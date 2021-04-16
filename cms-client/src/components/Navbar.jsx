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
    <nav className="navbar navbar-expand-lg shadow navbar-dark bg-dark">
      <img src="https://i.imgur.com/i8CznWD.jpg" id='img-navbar' class="card-img-top rounded-circle" alt="logo" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <span className="sr-only">ada</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(event) => { changePage({ event, destination: '' }) }}>Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(event) => { changePage({ event, destination: 'add-lecturer' }) }}>Add Lecturer</a>
          </li>
        </ul>
        <div>
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
        </div>
      </div>
    </nav>
  )
}
