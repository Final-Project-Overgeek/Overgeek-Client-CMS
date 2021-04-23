import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import baseUrl from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { editVideoAsync, videoEditAsync } from '../store/actions/videoAction';
import Loading from '../components/Loading';
import { uploadVideoAsync, uploadThumbnailAsync } from '../store/actions/videoUpload';

export default function EditVideo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { videoId, lecturerId } = useParams();
  const url = baseUrl + '/courses/' + videoId;
  const [videoEdit, setVideoEdit] = useState({
    title: '',
    isFree: '',
    thumbnail: '',
    url: ''
  });
  const [loading, setLoading] = useState(false);
  const video = useSelector((state) => state.videoReducer.video);
  const isFreeSelect = ['true', 'false'];
  let payload = {};
  const awsVideo = useSelector((state) => state.awsVideoReducer.awsVideo);
  const awsThumbnail = useSelector((state) => state.awsVideoReducer.awsThumbnail);

  console.log(awsThumbnail, 'before ================')

  useEffect(() => {
    dispatch(videoEditAsync({ url, setLoading }));
    if (video) {
      setVideoEdit({
        title: video.url === awsVideo ? video.title : '',
        isFree: video.url === awsVideo ? video.isFree : '',
        thumbnail: video.url === awsVideo ? video.thumbnail : '',
        url: video.url === awsVideo ? video.url : ''
      })
    }
  }, [loading, video]);

  function handleOnChange(event) {
    if (event.target.id === 'title') {
      setVideoEdit({ ...videoEdit, title: event.target.value });
    } else if (event.target.id === 'isFree') {
      setVideoEdit({ ...videoEdit, isFree: event.target.value });
    } else if (event.target.id === 'url') {
      setVideoEdit({ ...videoEdit, url: event.target.files[0] });
    } else if (event.target.id === 'thumbnail') {
      setVideoEdit({ ...videoEdit, thumbnail: event.target.files[0] });
    }
  }

  function getVideos({ event, video }) {
    let urlUploadVideo = baseUrl + '/upload/uploadVideos';
    event.preventDefault();
    setLoading(true);

    let fd = new FormData();
    fd.append('video', video); // ==============>>>>>>>>>> SEMENTARA PAKEK IMAGE UNTUK MENGHINDARI CLOUD FULL
    payload = fd;

    dispatch(uploadVideoAsync({ url: urlUploadVideo, payload, setLoading }));
  }

  function getThumbnail({ event, thumbnail }) {
    let urlUploadThumbnail = baseUrl + '/upload/uploadImages';
    event.preventDefault();
    setLoading(true);

    let fd = new FormData();
    fd.append('image', thumbnail);
    payload = fd;
    dispatch(uploadThumbnailAsync({ urlUploadThumbnail, payload, setLoading }));
  }

  function saveEditVideo(event) {
    event.preventDefault();
    console.log(awsThumbnail, 'after <<<<<<<<<<<<<<<<<')
    payload = {
      title: videoEdit.title,
      // thumbnail: 'awsThumbnail.data.awsImage',
      thumbnail: awsThumbnail,
      isFree: videoEdit.isFree,
      // url: 'awsVideo.data.awsVideo'
      url: awsVideo
    };

    editVideoAsync({ url, history, payload });
  }

  function changePage(event) {
    event.preventDefault();
    history.push('/video-table/' + lecturerId);
  }
  return (
    <div className='container'>
      <h3 className='mt-3 text-center'>Edit Videos</h3>
      {loading ? <Loading /> :
        <div className="card mt-3">
          <div className="card-header">
            <label for="add" className="form-label">{video.title}</label>
          </div>
          <div className="card-body">
            <label for="add" className="form-label ml-2">Video</label>
            <div class="custom-file mt-1">
              <input type="file" class="custom-file-input" id="url" onChange={(event) => { getVideos({ event, video: event.target.files[0] }) }} />
              <label class="custom-file-label" for="customFile" >{videoEdit.url}</label>
            </div>
            {!awsVideo ? null :
              <>
                <label for="add" className="form-label ml-2 mt-3">Thumbnail</label>
                <div class="custom-file mt-1">
                  <input type="file" class="custom-file-input" id="thumbnail" onChange={(event) => { getThumbnail({ event, thumbnail: event.target.files[0] }) }} />
                  <label class="custom-file-label" for="customFile" >{videoEdit.thumbnail}</label>
                </div>
              </>
            }
            {!awsThumbnail ? null :
              <>
                <div className="mb-3 mt-3">
                  <label for="add" className="form-label ml-2">Title</label>
                  <input type="text" className="form-control" id="title" value={videoEdit.title} onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                  <label for="add" className="form-label ml-2 mt-0">Is Free?</label>
                  <select className="form-select form-control" aria-label="Default select example" id="isFree" onChange={handleOnChange}>
                    {videoEdit.isFree ? <option selected value="true">Yes</option> : <option selected value="false">No</option>}
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    {/* {isFreeSelect.map((e, i) => {
                    <b>{JSON.stringify(e)}</b>
                    if (e != videoEdit.isFree || e == 'Yes') {
                      <option value="true">Yes</option>
                    } else if (e != videoEdit.isFree || e == 'No') {
                      <option value="false">No</option>
                    }
                  })} */}
                  </select>
                </div>
                <a href="#" className='btn btn-primary form-control mt-3' onClick={(event) => { saveEditVideo(event) }}>Edit</a>
                <a href="#" className='btn btn-danger form-control mt-2' onClick={(event) => { changePage(event) }}>Cancel</a>
              </>
            }
          </div>
        </div>
      }
    </div>
  )
}
