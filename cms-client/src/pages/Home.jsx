import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  function edit(params) {
    const { event, id } = params;
  }
  return (
    <div className='container'>
      <p className='h2 mt-3 mb-3 text-center'>Lecturer List</p>
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Game</th>
            <th scope="col">Role</th>
            <th scope="col">Team</th>
            <th scope="col">Language</th>
            <th scope="col">Videos</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>10 pcs</td>
            <td>
              <a href="#" className='btn btn-primary mr-2'>Edit</a>
              <a href="#" className='btn btn-danger'>Delete</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>3 pcs</td>
            <td>
              <a href="#" className='btn btn-primary mr-2'>Edit</a>
              <a href="#" className='btn btn-danger'>Delete</a>
            </td>
          </tr>
        </tbody>
      </table>


      {/* <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col mb-3">
          <div class="card h-100">
            <img src="https://miro.medium.com/max/3760/1*OEnS6-DEn56szCwdOs2mrA.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <a href="#" className='btn btn-primary form-control'>Edit</a>
              <a href="#" className='btn btn-danger form-control mt-2'>Delete</a>
            </div>
          </div>
        </div>
        <div class="col mb-3">
          <div class="card h-100">
            <img src="https://miro.medium.com/max/3760/1*OEnS6-DEn56szCwdOs2mrA.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a short card.</p>
            </div>
            <div class="card-footer">
              <a href="#" className='btn btn-primary form-control'>Edit</a>
              <a href="#" className='btn btn-danger form-control mt-2'>Delete</a>
            </div>
          </div>
        </div>
        <div class="col mb-3">
          <div class="card h-100">
            <img src="https://miro.medium.com/max/3760/1*OEnS6-DEn56szCwdOs2mrA.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <a href="#" className='btn btn-primary form-control'>Edit</a>
              <a href="#" className='btn btn-danger form-control mt-2'>Delete</a>
            </div>
          </div>
        </div>
        <div class="col mb-3">
          <div class="card h-100">
            <img src="https://miro.medium.com/max/3760/1*OEnS6-DEn56szCwdOs2mrA.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <a href="#" className='btn btn-primary form-control'>Edit</a>
              <a href="#" className='btn btn-danger form-control mt-2'>Delete</a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
