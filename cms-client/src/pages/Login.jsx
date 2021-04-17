import React, { useState } from 'react';
import { loginAsync } from '../store/actions/adminAction';
import baseUrl from '../api/index';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = baseUrl + '/login';
  const history = useHistory();
  const payload = { email, password };

  function getEmail(event) {
    setEmail(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function login(event) {
    event.preventDefault();
    loginAsync({ url, history, payload });
  }

  return (
    <div className='container'>
      <div className="row d-flex justify-content-center align-items-center shadow-lg mt-5 mx-auto" >
        <div className="col-5">
          <img src="https://i.imgur.com/i8CznWD.jpg" className="card-img-top rounded-circle" id='img-login' />
        </div>
        <div className="col-7 ">
          <h3 className='mt-5 text-center'>Sign In</h3>
          <form >
            <div className="form-group">
              <label for="email">Email address</label>
              <input onChange={getEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email address" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input onChange={getPassword} type="password" className="form-control" id="password" placeholder="password" />
            </div>
            <button onClick={(event) => { login(event) }} type="submit" className="btn btn-primary float-left form-control mb-5">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}


// style="width:700px; height:400px;"
// style="text-align: left;"