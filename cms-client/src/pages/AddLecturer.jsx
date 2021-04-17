import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addLecturerAsync } from '../store/actions/lecturerAction';
import baseUrl from '../api';

export default function AddLecturer() {
  const history = useHistory();
  const url = baseUrl + '/lecturers';
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');
  const [game, setGame] = useState('');
  const [role, setRole] = useState('');
  const [team, setTeam] = useState('');
  const [language, setLanguage] = useState('');
  const [image, setImage] = useState('');

  const [loading, setLoading] = useState(true);

  function getName(event) {
    setName(event.target.value);
  }

  function getProfile(event) {
    setProfile(event.target.value);
  }

  function getGame(event) {
    setGame(event.target.value);
  }

  function getRole(event) {
    setRole(event.target.value);
  }

  function getLanguage(event) {
    setLanguage(event.target.value);
  }

  function getTeam(event) {
    setTeam(event.target.value);
  }

  function getImage(event) {
    setImage(event.target.value);
  }

  function cancel(event) {
    event.preventDefault();
    history.push('/');
  }

  function saveNewLecturer(event) {
    event.preventDefault();
    let payload = { name, profile, game, role, language, team, image };
    addLecturerAsync({ url, history, payload });
  }
  return (
    <div className='container'>
      <p className='h2 mt-3 mb-3 text-center'>Add Lecturer</p>
      <form>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Name</label>
          <input type="text" className="form-control" id="add" onChange={getName} />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Profile</label>
          <textarea type="text" className="form-control" id="add" onChange={getProfile} />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Game</label>
          <input type="text" className="form-control" id="add" onChange={getGame} />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Role</label>
          <input type="text" className="form-control" id="add" onChange={getRole} />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Team</label>
          <input type="text" className="form-control" id="add" onChange={getTeam} />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Language</label>
          <input type="text" className="form-control" id="add" onChange={getLanguage} />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Image</label>
          <input type="text" className="form-control" id="add" onChange={getImage} />
        </div>
        <div className="card">
          <div className="card-header">
            <label for="add" className="form-label">Add Videos</label>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label for="add" className="form-label ml-2">Title</label>
              <input type="text" className="form-control" id="add" />
            </div>
            <div className="mb-3">
              <label for="add" className="form-label ml-2">Url</label>
              <input type="text" className="form-control" id="add" />
            </div>
            <div className="mb-3">
              <label for="add" className="form-label ml-2">Thumbnail</label>
              <input type="text" className="form-control" id="add" />
            </div>
            <div className="mb-3">
              <label for="add" className="form-label ml-2 mt-0">Status</label>
              <select className="form-select form-control" aria-label="Default select example">
                <option selected>--- Select One ---</option>
                <option value="true">Free</option>
                <option value="false">UnFree</option>
              </select>
            </div>
          </div>
          <a href="#" className='btn badge-success mb-3 ml-5 mr-5'>Add More Video</a>
        </div>
        <button type="submit" className="btn btn-primary form-control mb-2 mt-3" onClick={(event) => { saveNewLecturer(event) }}>Submit</button>
        <button type="submit" className="btn btn-danger form-control mb-5" onClick={(event) => { cancel(event) }}>Cancel</button>
      </form>
    </div>
  )
}
