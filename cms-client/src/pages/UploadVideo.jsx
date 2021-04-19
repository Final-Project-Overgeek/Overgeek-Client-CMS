import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { uploadVideoAsync, saveVideoDetailAsync } from '../store/actions/videoUpload';
import baseUrl from '../api';
import axios from 'axios';

async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await axios.post(`${baseUrl}/upload/uploadImages`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}

export default function UploadVideo() {
  const [file, setFile] = useState()
  // const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const [uploadVideo, setUploadVideo] = useState(null);
  const url = baseUrl + '/upload/uploadImages';
  const [videoData, setVideoData] = useState({
    title: '',
    thumbnail: '',
    isFree: ''
  });
  const [isClick, setIsClick] = useState(true);
  let payload = {};

  function handleOnChange(event) {
    if (event.target.id === 'title') {
      setVideoData({ ...videoData, title: event.target.value });
    } else if (event.target.id === 'thumbnail') {
      setVideoData({ ...videoData, thumbnail: event.target.value });
    } else if (event.target.id === 'isFree') {
      setVideoData({ ...videoData, isFree: event.target.value });
    }
  }

  function getVideos({ event, video }) {
    event.preventDefault();
    setIsClick(false);

    let fd = new FormData();
    fd.append('video', video);
    payload = fd;

    uploadVideoAsync({ url, payload });
  }

  function saveVideoDetail(event) {
    event.preventDefault();
    setIsClick(true);
  }
  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file})
    setImages([result.image, ...images])
  }



  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <h3 className='mt-5 text-center'>Upload Videos</h3>
        <div className="card mt-3">
          <div className="card-header">
            <label for="add" className="form-label">Add Videos</label>
          </div>
          <div className="card-body">
            <div class="custom-file mt-3">
              <input type="file" class="custom-file-input" id="customFile" onChange={(event) => { getVideos({ event, video: event.target.files[0] }) }} />
              <label class="custom-file-label" for="customFile" >Choose file</label>
            </div>
            {isClick ? <a href="#" className='btn btn-primary form-control mt-3' onClick={(event) => { getVideos(event) }}>Get Video</a> : null}
            {isClick ? null :
              <>
                <div className="mb-3 mt-3">
                  <label for="add" className="form-label ml-2">Title</label>
                  <input type="text" className="form-control" id="title" onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                  <label for="add" className="form-label ml-2">Thumbnail</label>
                  <input type="text" className="form-control" id="thumbnail" onChange={handleOnChange} />
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
      </div>
        
        <video src="/data/93e639109e5eb457e774c72b0f42562a" controls></video>
      <img src="data/9851bf51bae1072a66a7dde2655d3d51" alt="2ada" />
      
    </>
  )
}
