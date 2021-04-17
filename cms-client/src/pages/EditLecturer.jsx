import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import baseUrl from '../api';
import Loading from '../components/Loading';
import { setLecturerAsync, saveEditAsync } from '../store/actions/lecturerAction';

export default function EditLecturer() {
  const lecturer = useSelector((state) => state.lecturerReducer.lecturer);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const url = baseUrl + '/lecturers/' + id;
  const [name, setName] = useState(lecturer[0].name);
  const [profile, setProfile] = useState(lecturer[0].profile);
  const [game, setGame] = useState(lecturer[0].game);
  const [role, setRole] = useState(lecturer[0].role);
  const [team, setTeam] = useState(lecturer[0].team);
  const [language, setLanguage] = useState(lecturer[0].language);
  const [image, setImage] = useState(lecturer[0].image);

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

  function saveEdit(event) {
    event.preventDefault();
    let payload = { name, profile, game, role, language, team, image };
    saveEditAsync({ url, history, payload, setLoading });
  }

  useEffect(() => {
    dispatch(setLecturerAsync({ url, setLoading }))
  }, []);

  return (
    <div className='container'>
      <p className='h2 mt-3 mb-3 text-center'>Edit Lecturer</p>
      {loading ? <Loading /> :
        <form>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Name</label>
            <input type="text" className="form-control" id="add" value={name} onChange={getName} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Profile</label>
            <textarea type="text" className="form-control" id="add" value={profile} onChange={getProfile} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Game</label>
            <input type="text" className="form-control" id="add" value={game} onChange={getGame} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Role</label>
            <input type="text" className="form-control" id="add" value={role} onChange={getRole} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Team</label>
            <input type="text" className="form-control" id="add" value={team} onChange={getTeam} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Language</label>
            <input type="text" className="form-control" id="add" value={language} onChange={getLanguage} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Image</label>
            <input type="text" className="form-control" id="add" value={image} onChange={getImage} />
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
                  <option value="false">Paid</option>
                </select>
              </div>
            </div>
            <a href="#" className='btn badge-success mb-3 ml-5 mr-5'>Add More Video</a>
          </div>
          <button type="submit" className="btn btn-primary form-control mb-2 mt-3" onClick={(event) => { saveEdit(event) }}>Submit</button>
          <button type="submit" className="btn btn-danger form-control mb-5" onClick={(event) => { cancel(event) }}>Cancel</button>
        </form>
      }
    </div>
  )
}
