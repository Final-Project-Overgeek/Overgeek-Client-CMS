import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import baseUrl from '../api';
import Loading from '../components/Loading';
import { setLecturerAsync, saveEditAsync } from '../store/actions/lecturerAction';

export default function EditLecturer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const url = baseUrl + '/lecturers/' + id;
  const lecturer = useSelector((state) => state.lecturerReducer.lecturer);
  const [lecturerData, setLecturerData] = useState({
    name: '',
    profile: '',
    game: '',
    role: '',
    team: '',
    language: '',
    image: ''
  });
  const games = [
    "PlayerUnknown's Battlegrounds Mobile",
    "League of Legends: Wild Rift",
    "Free Fire Battlegrounds",
    "Mobile Legends"
  ]

  useEffect(() => {
    dispatch(setLecturerAsync({ url, setLoading }));

    if (lecturer.length) {
      setLecturerData({
        name: lecturer ? lecturer[0].name : '',
        profile: lecturer ? lecturer[0].profile : '',
        game: lecturer ? lecturer[0].game : '',
        role: lecturer ? lecturer[0].role : '',
        team: lecturer ? lecturer[0].team : '',
        language: lecturer ? lecturer[0].language : '',
        image: lecturer ? lecturer[0].image : ''
      })
    }
  }, [loading]);


  function cancel(event) {
    event.preventDefault();
    history.push('/');
  }

  function handleOnChange(event) {
    if (event.target.id === 'name') {
      setLecturerData({ ...lecturerData, name: event.target.value });
    } else if (event.target.id === 'profile') {
      setLecturerData({ ...lecturerData, profile: event.target.value });
    } else if (event.target.id === 'game') {
      setLecturerData({ ...lecturerData, game: event.target.value });
    } else if (event.target.id === 'role') {
      setLecturerData({ ...lecturerData, role: event.target.value });
    } else if (event.target.id === 'team') {
      setLecturerData({ ...lecturerData, team: event.target.value });
    } else if (event.target.id === 'language') {
      setLecturerData({ ...lecturerData, language: event.target.value });
    } else if (event.target.id === 'image') {
      setLecturerData({ ...lecturerData, image: event.target.value });
    }
  }

  function saveEdit(event) {
    event.preventDefault();
    let payload = lecturerData;
    saveEditAsync({ url, history, payload, setLoading });
  }

  return (
    <div className='container'>
      <p className='h2 mt-3 mb-3 text-center'>Edit Lecturer</p>
      {loading ? <Loading /> :
        <form>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Name</label>
            <input type="text" className="form-control" id="name" value={lecturerData.name} onChange={handleOnChange} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Profile</label>
            <textarea type="text" className="form-control" id="profile" value={lecturerData.profile} onChange={handleOnChange} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Game</label>
            <select class="form-select form-control" aria-label="Default select example" id="game" onChange={handleOnChange}>
              <option selected value={lecturerData.game} >{lecturerData.game}</option>
              {games.map((game, i) => {
                if (game != lecturerData.game) {
                  return (
                    <option value={game} key={i}>{game}</option>
                  )
                }
              })}
            </select>
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Role</label>
            <input type="text" className="form-control" id="role" value={lecturerData.role} onChange={handleOnChange} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Team</label>
            <input type="text" className="form-control" id="team" value={lecturerData.team} onChange={handleOnChange} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Language</label>
            <input type="text" className="form-control" id="language" value={lecturerData.language} onChange={handleOnChange} />
          </div>
          <div className="mb-3">
            <label for="add" className="form-label ml-2">Image</label>
            <input type="text" className="form-control" id="image" value={lecturerData.image} onChange={handleOnChange} />
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

// (event) => { setLecturerData(event.target.value) }