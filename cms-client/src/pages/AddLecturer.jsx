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
          <select required onChange={getGame} class="form-select form-control" aria-label="Default select example">
            <option selected >-- Select Game --</option>
            <option value="PlayerUnknown's Battlegrounds Mobile">PlayerUnknown's Battlegrounds Mobile</option>
            <option value="League of Legends: Wild Rift">League of Legends: Wild Rift</option>
            <option value="Free Fire Battlegrounds">Free Fire Battlegrounds</option>
            <option value="Mobile Legends">Mobile Legends</option>
          </select>
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
        <button type="submit" className="btn btn-primary form-control mb-2 mt-3" onClick={(event) => { saveNewLecturer(event) }}>Submit</button>
        <button type="submit" className="btn btn-danger form-control mb-5" onClick={(event) => { cancel(event) }}>Cancel</button>
      </form>
    </div>
  )
}
