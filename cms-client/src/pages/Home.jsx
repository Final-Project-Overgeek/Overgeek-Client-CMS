import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLecturersAsync, deleteLecturerAsync } from '../store/actions/lecturerAction';
import baseUrl from '../api'
import Loading from '../components/Loading';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const lecturers = useSelector((state) => state.lecturerReducer.lecturers);
  const url = baseUrl + '/lecturers';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setLecturersAsync({ url, setLoading }))
  }, []);

  function edit(params) {
    const { event, id } = params;

    event.preventDefault();
    history.push('/edit-lecturer/' + id);
  }

  function deleteLecturer(params) {
    const { event, id } = params;
    let urlDel = baseUrl + '/lecturers/' + id;

    event.preventDefault();
    deleteLecturerAsync(urlDel);
    dispatch(setLecturersAsync({ url, setLoading }));
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
        {loading ? <Loading /> :
          <tbody>
            {lecturers.map((lecturer, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{lecturer.name}</td>
                  <td>{lecturer.game}</td>
                  <td>{lecturer.role}</td>
                  <td>{lecturer.team}</td>
                  <td>{lecturer.language}</td>
                  <td>{lecturer.videos.length} pcs</td>
                  <td>
                    <a href="#" className='btn btn-primary mr-2' onClick={(event) => { edit({ event, id: lecturer.id }) }}>Edit</a>
                    <a href="#" className='btn btn-danger' onClick={(event) => { deleteLecturer({ event, id: lecturer.id }) }}>Delete</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        }
      </table>
    </div>
  )
}
