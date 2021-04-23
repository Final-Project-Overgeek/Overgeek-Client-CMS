import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  uploadVideoAsync,
  saveVideoDetailAsync,
  uploadThumbnailAsync
} from '../store/actions/videoUpload';
import baseUrl from '../api';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';

export default function UploadVideo() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = baseUrl + '/upload/uploadVideos';
  const [videoData, setVideoData] = useState({
    title: '',
    isFree: ''
  });
  const awsVideo = useSelector((state) => state.awsVideoReducer.awsVideo);
  const awsThumbnail = useSelector((state) => state.awsVideoReducer.awsThumbnail);
  let payload = {};
  let thumbnailFileName = '';
  let videoFileName = '';

  function handleOnChange(event) {
    if (event.target.id === 'title') {
      setVideoData({ ...videoData, title: event.target.value });
    } else if (event.target.id === 'isFree') {
      setVideoData({ ...videoData, isFree: event.target.value });
    }
  }

  function getVideos({ event, video }) {
    event.preventDefault();
    setLoading(true);

    let fd = new FormData();
    fd.append('video', video);
    payload = fd;

    dispatch(uploadVideoAsync({ url, payload, setLoading }));
  }

  function getThumbnail({ event, thumbnail }) {
    let urlUploadThumbnail = baseUrl + '/upload/uploadImages';
    event.preventDefault();
    setLoading(true);
    thumbnailFileName = thumbnail.name;

    let fd = new FormData();
    fd.append('image', thumbnail);
    payload = fd;
    dispatch(uploadThumbnailAsync({ urlUploadThumbnail, payload, setLoading }));
  }

  function saveVideoDetail(event) {
    let urlSaveVideo = baseUrl + '/courses/' + id;
    event.preventDefault();
    payload = {
      title: videoData.title,
      thumbnail: awsThumbnail,
      isFree: videoData.isFree,
      url: awsVideo
    };

    saveVideoDetailAsync({ urlSaveVideo, payload, history });
  }

  function cancel(event) {
    event.preventDefault();
    history.push('/edit-lecturer/' + id);
  }

  return (
    <>
      <Navbar />
      {loading ? <Loading /> :
        <div className='container'>
          <h3 className='mt-3 text-center'>Upload Videos</h3>
          <div className="card mt-3">
            <div className="card-header">
              <label for="add" className="form-label">Add Videos</label>
            </div>
            <div className="card-body">
              <label for="add" className="form-label ml-2">Video</label>
              <div className="custom-file mt-1">
                <input type="file" className="custom-file-input" id="customFile" onChange={(event) => { getVideos({ event, video: event.target.files[0] }) }} />
                {videoFileName ? <label className="custom-file-label" for="customFile" >{videoFileName}</label> :
                  <label className="custom-file-label" for="customFile" >Choose file</label>
                }
              </div>
              {!awsVideo ? null :
                <>
                  <label for="add" className="form-label ml-2 mt-3">Thumbnail</label>
                  <div className="custom-file mt-1">
                    <input type="file" className="custom-file-input" id="customFile" onChange={(event) => { getThumbnail({ event, thumbnail: event.target.files[0] }) }} />
                    {thumbnailFileName ? <label className="custom-file-label" for="customFile" >{thumbnailFileName}</label> :
                      <label className="custom-file-label" for="customFile" >Choose file</label>
                    }
                  </div>
                </>
              }
              {!awsThumbnail ? null :
                <>
                  <div className="mb-3 mt-3">
                    <label for="add" className="form-label ml-2">Title</label>
                    <input type="text" className="form-control" id="title" onChange={handleOnChange} />
                  </div>
                  <div className="mb-3">
                    <label for="add" className="form-label ml-2 mt-0">Is Free?</label>
                    <select className="form-select form-control" aria-label="Default select example" id="isFree" onChange={handleOnChange}>
                      <option selected>--- Select One ---</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <a href="#" className='btn btn-success form-control mt-3' onClick={(event) => { saveVideoDetail(event) }}>Upload</a>
                </>
              }
            </div>
          </div>
          <a href="#" className='btn btn-danger form-control mt-3' onClick={(event) => { cancel(event) }}>Cancel</a>
        </div>
      }
    </>
  )
}
