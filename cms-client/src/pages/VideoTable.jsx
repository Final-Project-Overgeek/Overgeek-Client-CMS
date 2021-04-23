import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import baseUrl from '../api';
import Loading from '../components/Loading';
import { deleteVideoAsync } from '../store/actions/videoAction';

export default function VideoTable() {
  const { id } = useParams();
  let lecturerId = id;
  const history = useHistory();
  const { videos } = useSelector((state) => state.lecturerReducer.lecturer[0]);

  function backTo(event) {
    event.preventDefault();

    history.push('/edit-lecturer/' + lecturerId);
  }

  function changePage(params) {
    const { event, id } = params;
    event.preventDefault();
    history.push('/edit-video/' + lecturerId + '/' + id);
  }

  function deleteVideo(params) {
    const { event, id } = params;
    let urlDel = baseUrl + '/courses/' + id;
    event.preventDefault();

    deleteVideoAsync({ urlDel, history, lecturerId });
  }

  return (
    <div className='container'>
      <p className='h2 mt-3 mb-3 text-center'>Video Courses</p>
      {!videos ? <Loading /> :
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Thumbnail</th>
              <th scope="col">isFree</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{video.title}</td>
                  <td>
                    <img style={{ width: "17em" }} src={video.thumbnail} alt={video.title} />
                  </td>
                  {video.isFree ? <td>Yes</td> : <td>No</td>}
                  <td>
                    {/* <a href="#" className='btn btn-primary form-control mb-1' onClick={(event) => { changePage({ event, id: video.id }) }}>Edit</a> */}
                    <a href="#" className='btn btn-danger form-control' onClick={(event) => { deleteVideo({ event, id: video.id }) }}>Delete</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
      <a href="#" className='btn btn-info form-control mb-5' onClick={(event) => { backTo(event) }}>Back</a>
    </div>
  )
}
